import {
  aws_ec2,
  aws_iam,
  aws_kms,
  aws_secretsmanager,
  aws_rds,
  cx_api,
  Annotations,
  Duration,
  FeatureFlags,
  Lazy,
  RemovalPolicy,
  Token,
  Resource,
  ArnFormat,
  Stack,
} from "aws-cdk-lib";
import { DATA_API_ACTIONS } from "aws-cdk-lib/aws-rds/lib/perms";
import {
  DEFAULT_PASSWORD_EXCLUDE_CHARS,
  defaultDeletionProtection,
  renderCredentials,
} from "aws-cdk-lib/aws-rds/lib/private/util";
import { Construct } from "constructs";

/**
 *  Properties to configure an Aurora Serverless Cluster
 *
 */
export interface ServerlessClusterFromSnapshotProps {
  /**
   * What kind of database to start
   */
  readonly engine: aws_rds.IClusterEngine;

  /**
   * Credentials for the administrative user
   *
   * @default - A username of 'admin' and SecretsManager-generated password
   */
  readonly credentials?: aws_rds.Credentials;

  /**
   * An optional identifier for the cluster
   *
   * @default - A name is automatically generated.
   */
  readonly clusterIdentifier?: string;

  /**
   * The identifier for the DB snapshot or DB cluster snapshot to restore from.
   *
   * You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.
   *
   * After you restore a DB cluster with a SnapshotIdentifier property, you must specify the same SnapshotIdentifier property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the SnapshotIdentifier property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified SnapshotIdentifier property, and the original DB cluster is deleted.
   */
  readonly snapshotIdentifier: string;

  /**
   * The number of days during which automatic DB snapshots are retained.
   * Automatic backup retention cannot be disabled on serverless clusters.
   * Must be a value from 1 day to 35 days.
   *
   * @default Duration.days(1)
   */
  readonly backupRetention?: Duration;

  /**
   * Name of a database which is automatically created inside the cluster
   *
   * @default - Database is not created in cluster.
   */
  readonly defaultDatabaseName?: string;

  /**
   * Indicates whether the DB cluster should have deletion protection enabled.
   *
   * @default - true if removalPolicy is RETAIN, false otherwise
   */
  readonly deletionProtection?: boolean;

  /**
   * Whether to enable the Data API.
   *
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html
   *
   * @default false
   */
  readonly enableDataApi?: boolean;

  /**
   * The VPC that this Aurora Serverless cluster has been created in.
   */
  readonly vpc: aws_ec2.IVpc;

  /**
   * Where to place the instances within the VPC
   *
   * @default - the VPC default strategy if not specified.
   */
  readonly vpcSubnets?: aws_ec2.SubnetSelection;

  /**
   * Scaling configuration of an Aurora Serverless database cluster.
   *
   * @default - Serverless cluster is automatically paused after 5 minutes of being idle.
   *   minimum capacity: 2 ACU
   *   maximum capacity: 16 ACU
   */
  readonly scaling?: aws_rds.ServerlessScalingOptions;

  /**
   * The removal policy to apply when the cluster and its instances are removed
   * from the stack or replaced during an update.
   *
   * @default - RemovalPolicy.SNAPSHOT (remove the cluster and instances, but retain a snapshot of the data)
   */
  readonly removalPolicy?: RemovalPolicy;

  /**
   * Security group.
   *
   * @default - a new security group is created.
   */
  readonly securityGroups?: aws_ec2.ISecurityGroup[];

  /**
   * The KMS key for storage encryption.
   *
   * If you specify the SnapshotIdentifier property, the StorageEncrypted property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified KmsKeyId property is used.
   *
   * @default - the default master key will be used for storage encryption
   */
  readonly storageEncryptionKey?: aws_kms.IKey;

  /**
   * Additional parameters to pass to the database engine
   *
   * @default - no parameter group.
   */
  readonly parameterGroup?: aws_rds.IParameterGroup;

  /**
   * Existing subnet group for the cluster.
   *
   * @default - a new subnet group will be created.
   */
  readonly subnetGroup?: aws_rds.ISubnetGroup;
}

/**
 * A Serverless Cluster restored from a snapshot.
 *
 * @resource AWS::RDS::DBInstance
 */
export class ServerlessClusterFromSnapshot extends Resource implements aws_rds.IServerlessCluster {
  /**
   * Identifier of the cluster
   */
  public readonly clusterIdentifier: string;

  /**
   * The endpoint to use for read/write operations
   */
  public readonly clusterEndpoint: aws_rds.Endpoint;

  /**
   * The endpoint to use for read/write operations
   */
  public readonly clusterReadEndpoint: aws_rds.Endpoint;

  /**
   * Access to the network connections
   */
  public readonly connections: aws_ec2.Connections;

  /**
   * The secret attached to this cluster
   */
  public readonly secret?: aws_secretsmanager.ISecret;

  protected enableDataApi?: boolean;

  private readonly subnetGroup: aws_rds.ISubnetGroup;

  private readonly vpc: aws_ec2.IVpc;

  private readonly vpcSubnets?: aws_ec2.SubnetSelection;

  private readonly singleUserRotationApplication: aws_secretsmanager.SecretRotationApplication;

  private readonly multiUserRotationApplication: aws_secretsmanager.SecretRotationApplication;

  constructor(scope: Construct, id: string, props: ServerlessClusterFromSnapshotProps) {
    super(scope, id);

    this.vpc = props.vpc;
    this.vpcSubnets = props.vpcSubnets;

    this.singleUserRotationApplication = props.engine.singleUserRotationApplication;
    this.multiUserRotationApplication = props.engine.multiUserRotationApplication;

    this.enableDataApi = props.enableDataApi;

    const { subnetIds } = this.vpc.selectSubnets(this.vpcSubnets);

    // Cannot test whether the subnets are in different AZs, but at least we can test the amount.
    if (subnetIds.length < 2) {
      Annotations.of(this).addError(`Cluster requires at least 2 subnets, got ${subnetIds.length}`);
    }

    this.subnetGroup =
      props.subnetGroup ??
      new aws_rds.SubnetGroup(this, "Subnets", {
        description: `Subnets for ${id} database`,
        vpc: props.vpc,
        vpcSubnets: props.vpcSubnets,
        removalPolicy: props.removalPolicy === RemovalPolicy.RETAIN ? props.removalPolicy : undefined,
      });

    if (props.backupRetention) {
      const backupRetentionDays = props.backupRetention.toDays();
      if (backupRetentionDays < 1 || backupRetentionDays > 35) {
        throw new Error(`backup retention period must be between 1 and 35 days. received: ${backupRetentionDays}`);
      }
    }

    // bind the engine to the Cluster
    const clusterEngineBindConfig = props.engine.bindToCluster(this, {
      parameterGroup: props.parameterGroup,
    });
    const clusterParameterGroup = props.parameterGroup ?? clusterEngineBindConfig.parameterGroup;
    const clusterParameterGroupConfig = clusterParameterGroup?.bindToCluster({});

    const securityGroups = props.securityGroups ?? [
      new aws_ec2.SecurityGroup(this, "SecurityGroup", {
        description: "RDS security group",
        vpc: this.vpc,
      }),
    ];

    const clusterIdentifier = FeatureFlags.of(this).isEnabled(cx_api.RDS_LOWERCASE_DB_IDENTIFIER)
      ? props.clusterIdentifier?.toLowerCase()
      : props.clusterIdentifier;

    const cluster = new aws_rds.CfnDBCluster(this, "Resource", {
      backupRetentionPeriod: props.backupRetention?.toDays(),
      databaseName: props.defaultDatabaseName,
      dbClusterIdentifier: clusterIdentifier,
      snapshotIdentifier: props.snapshotIdentifier,
      dbClusterParameterGroupName: clusterParameterGroupConfig?.parameterGroupName,
      dbSubnetGroupName: this.subnetGroup.subnetGroupName,
      deletionProtection: defaultDeletionProtection(props.deletionProtection, props.removalPolicy),
      engine: props.engine.engineType,
      engineVersion: props.engine.engineVersion?.fullVersion,
      engineMode: "serverless",
      enableHttpEndpoint: Lazy.any({ produce: () => this.enableDataApi }),
      kmsKeyId: props.storageEncryptionKey?.keyArn,
      scalingConfiguration: props.scaling ? this.renderScalingConfiguration(props.scaling) : undefined,
      vpcSecurityGroupIds: securityGroups.map((sg) => sg.securityGroupId),
    });

    this.clusterIdentifier = cluster.ref;

    // create a number token that represents the port of the cluster
    const portAttribute = Token.asNumber(cluster.attrEndpointPort);
    this.clusterEndpoint = new aws_rds.Endpoint(cluster.attrEndpointAddress, portAttribute);
    this.clusterReadEndpoint = new aws_rds.Endpoint(cluster.attrReadEndpointAddress, portAttribute);
    this.connections = new aws_ec2.Connections({
      securityGroups,
      defaultPort: aws_ec2.Port.tcp(this.clusterEndpoint.port),
    });

    cluster.applyRemovalPolicy(props.removalPolicy ?? RemovalPolicy.SNAPSHOT);

    const credentials = renderCredentials(this, props.engine, props.credentials);
    const secret = credentials.secret;
    if (secret) {
      this.secret = secret.attach(this);
    }
  }

  /**
   * Adds the single user rotation of the master password to this cluster.
   */
  public addRotationSingleUser(options: aws_rds.RotationSingleUserOptions = {}): aws_secretsmanager.SecretRotation {
    if (!this.secret) {
      throw new Error("Cannot add single user rotation for a cluster without secret.");
    }

    const id = "RotationSingleUser";
    const existing = this.node.tryFindChild(id);
    if (existing) {
      throw new Error("A single user rotation was already added to this cluster.");
    }

    return new aws_secretsmanager.SecretRotation(this, id, {
      secret: this.secret,
      application: this.singleUserRotationApplication,
      vpc: this.vpc,
      vpcSubnets: this.vpcSubnets,
      target: this,
      ...options,
      excludeCharacters: options.excludeCharacters ?? DEFAULT_PASSWORD_EXCLUDE_CHARS,
    });
  }

  /**
   * Adds the multi user rotation to this cluster.
   */
  public addRotationMultiUser(
    id: string,
    options: aws_rds.RotationMultiUserOptions
  ): aws_secretsmanager.SecretRotation {
    if (!this.secret) {
      throw new Error("Cannot add multi user rotation for a cluster without secret.");
    }
    return new aws_secretsmanager.SecretRotation(this, id, {
      ...options,
      excludeCharacters: options.excludeCharacters ?? DEFAULT_PASSWORD_EXCLUDE_CHARS,
      masterSecret: this.secret,
      application: this.multiUserRotationApplication,
      vpc: this.vpc,
      vpcSubnets: this.vpcSubnets,
      target: this,
    });
  }
  private renderScalingConfiguration(
    options: aws_rds.ServerlessScalingOptions
  ): aws_rds.CfnDBCluster.ScalingConfigurationProperty {
    const minCapacity = options.minCapacity;
    const maxCapacity = options.maxCapacity;

    if (minCapacity && maxCapacity && minCapacity > maxCapacity) {
      throw new Error("Maximum capacity must be greater than or equal to minimum capacity.");
    }

    const secondsToAutoPause = options.autoPause?.toSeconds();
    if (secondsToAutoPause && (secondsToAutoPause < 300 || secondsToAutoPause > 86400)) {
      throw new Error("Auto pause time must be between 5 minutes and 1 day.");
    }

    return {
      autoPause: secondsToAutoPause !== 0,
      minCapacity: options.minCapacity,
      maxCapacity: options.maxCapacity,
      secondsUntilAutoPause: secondsToAutoPause === 0 ? undefined : secondsToAutoPause,
    };
  }

  /**
   * The ARN of the cluster
   */
  public get clusterArn(): string {
    return Stack.of(this).formatArn({
      service: "rds",
      resource: "cluster",
      arnFormat: ArnFormat.COLON_RESOURCE_NAME,
      resourceName: this.clusterIdentifier,
    });
  }

  /**
   * Grant the given identity to access to the Data API, including read access to the secret attached to the cluster if present
   *
   * @param grantee The principal to grant access to
   */
  public grantDataApiAccess(grantee: aws_iam.IGrantable): aws_iam.Grant {
    if (this.enableDataApi === false) {
      throw new Error("Cannot grant Data API access when the Data API is disabled");
    }

    this.enableDataApi = true;
    const ret = aws_iam.Grant.addToPrincipal({
      grantee,
      actions: DATA_API_ACTIONS,
      resourceArns: ["*"],
      scope: this,
    });
    this.secret?.grantRead(grantee);
    return ret;
  }

  /**
   * Renders the secret attachment target specifications.
   */
  public asSecretAttachmentTarget(): aws_secretsmanager.SecretAttachmentTargetProps {
    return {
      targetId: this.clusterIdentifier,
      targetType: aws_secretsmanager.AttachmentTargetType.RDS_DB_CLUSTER,
    };
  }
}
