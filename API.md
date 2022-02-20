# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessClusterFromSnapshot <a name="ServerlessClusterFromSnapshot" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot"></a>

- *Implements:* aws-cdk-lib.aws_rds.IServerlessCluster

A Serverless Cluster restored from a snapshot.

#### Initializers <a name="Initializers" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.Initializer"></a>

```typescript
import { ServerlessClusterFromSnapshot } from '@pepperize/cdk-serverless-cluster-from-snapshot'

new ServerlessClusterFromSnapshot(scope: Construct, id: string, props: ServerlessClusterFromSnapshotProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps">ServerlessClusterFromSnapshotProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps">ServerlessClusterFromSnapshotProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.addRotationMultiUser">addRotationMultiUser</a></code> | Adds the multi user rotation to this cluster. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.addRotationSingleUser">addRotationSingleUser</a></code> | Adds the single user rotation of the master password to this cluster. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.asSecretAttachmentTarget">asSecretAttachmentTarget</a></code> | Renders the secret attachment target specifications. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.grantDataApiAccess">grantDataApiAccess</a></code> | Grant the given identity to access to the Data API, including read access to the secret attached to the cluster if present. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops being managed by CloudFormation, either because you've removed it from the CDK application or because you've made a change that requires the resource to be replaced.  The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addRotationMultiUser` <a name="addRotationMultiUser" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.addRotationMultiUser"></a>

```typescript
public addRotationMultiUser(id: string, options: RotationMultiUserOptions): SecretRotation
```

Adds the multi user rotation to this cluster.

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.addRotationMultiUser.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.addRotationMultiUser.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_rds.RotationMultiUserOptions

---

##### `addRotationSingleUser` <a name="addRotationSingleUser" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.addRotationSingleUser"></a>

```typescript
public addRotationSingleUser(options?: RotationSingleUserOptions): SecretRotation
```

Adds the single user rotation of the master password to this cluster.

###### `options`<sup>Optional</sup> <a name="options" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.addRotationSingleUser.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_rds.RotationSingleUserOptions

---

##### `asSecretAttachmentTarget` <a name="asSecretAttachmentTarget" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.asSecretAttachmentTarget"></a>

```typescript
public asSecretAttachmentTarget(): SecretAttachmentTargetProps
```

Renders the secret attachment target specifications.

##### `grantDataApiAccess` <a name="grantDataApiAccess" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.grantDataApiAccess"></a>

```typescript
public grantDataApiAccess(grantee: IGrantable): Grant
```

Grant the given identity to access to the Data API, including read access to the secret attached to the cluster if present.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.grantDataApiAccess.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.isConstruct"></a>

```typescript
import { ServerlessClusterFromSnapshot } from '@pepperize/cdk-serverless-cluster-from-snapshot'

ServerlessClusterFromSnapshot.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.isResource"></a>

```typescript
import { ServerlessClusterFromSnapshot } from '@pepperize/cdk-serverless-cluster-from-snapshot'

ServerlessClusterFromSnapshot.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.clusterArn">clusterArn</a></code> | <code>string</code> | The ARN of the cluster. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.clusterEndpoint">clusterEndpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The endpoint to use for read/write operations. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Identifier of the cluster. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.clusterReadEndpoint">clusterReadEndpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The endpoint to use for read/write operations. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access to the network connections. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | The secret attached to this cluster. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK (generally, those created by creating new class instances like Role, Bucket, etc.), this is always the same as the environment of the stack they belong to; however, for imported resources (those obtained from static methods like fromRoleArn, fromBucketName, etc.), that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

The ARN of the cluster.

---

##### `clusterEndpoint`<sup>Required</sup> <a name="clusterEndpoint" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.clusterEndpoint"></a>

```typescript
public readonly clusterEndpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The endpoint to use for read/write operations.

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Identifier of the cluster.

---

##### `clusterReadEndpoint`<sup>Required</sup> <a name="clusterReadEndpoint" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.clusterReadEndpoint"></a>

```typescript
public readonly clusterReadEndpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The endpoint to use for read/write operations.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access to the network connections.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The secret attached to this cluster.

---


## Structs <a name="Structs" id="Structs"></a>

### ServerlessClusterFromSnapshotProps <a name="ServerlessClusterFromSnapshotProps" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps"></a>

Properties to configure an Aurora Serverless Cluster.

#### Initializer <a name="Initializer" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.Initializer"></a>

```typescript
import { ServerlessClusterFromSnapshotProps } from '@pepperize/cdk-serverless-cluster-from-snapshot'

const serverlessClusterFromSnapshotProps: ServerlessClusterFromSnapshotProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.engine">engine</a></code> | <code>aws-cdk-lib.aws_rds.IClusterEngine</code> | What kind of database to start. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>string</code> | The identifier for the DB snapshot or DB cluster snapshot to restore from. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC that this Aurora Serverless cluster has been created in. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.backupRetention">backupRetention</a></code> | <code>aws-cdk-lib.Duration</code> | The number of days during which automatic DB snapshots are retained. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | An optional identifier for the cluster. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_rds.Credentials</code> | Credentials for the administrative user. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.defaultDatabaseName">defaultDatabaseName</a></code> | <code>string</code> | Name of a database which is automatically created inside the cluster. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.deletionProtection">deletionProtection</a></code> | <code>boolean</code> | Indicates whether the DB cluster should have deletion protection enabled. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.enableDataApi">enableDataApi</a></code> | <code>boolean</code> | Whether to enable the Data API. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.parameterGroup">parameterGroup</a></code> | <code>aws-cdk-lib.aws_rds.IParameterGroup</code> | Additional parameters to pass to the database engine. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply when the cluster and its instances are removed from the stack or replaced during an update. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.scaling">scaling</a></code> | <code>aws-cdk-lib.aws_rds.ServerlessScalingOptions</code> | Scaling configuration of an Aurora Serverless database cluster. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | Security group. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.storageEncryptionKey">storageEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS key for storage encryption. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.subnetGroup">subnetGroup</a></code> | <code>aws-cdk-lib.aws_rds.ISubnetGroup</code> | Existing subnet group for the cluster. |
| <code><a href="#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the instances within the VPC. |

---

##### `engine`<sup>Required</sup> <a name="engine" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.engine"></a>

```typescript
public readonly engine: IClusterEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IClusterEngine

What kind of database to start.

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: string;
```

- *Type:* string

The identifier for the DB snapshot or DB cluster snapshot to restore from.

You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.  After you restore a DB cluster with a SnapshotIdentifier property, you must specify the same SnapshotIdentifier property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the SnapshotIdentifier property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified SnapshotIdentifier property, and the original DB cluster is deleted.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC that this Aurora Serverless cluster has been created in.

---

##### `backupRetention`<sup>Optional</sup> <a name="backupRetention" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.backupRetention"></a>

```typescript
public readonly backupRetention: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.days(1)

The number of days during which automatic DB snapshots are retained.

Automatic backup retention cannot be disabled on serverless clusters. Must be a value from 1 day to 35 days.

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string
- *Default:* A name is automatically generated.

An optional identifier for the cluster.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.credentials"></a>

```typescript
public readonly credentials: Credentials;
```

- *Type:* aws-cdk-lib.aws_rds.Credentials
- *Default:* A username of 'admin' and SecretsManager-generated password

Credentials for the administrative user.

---

##### `defaultDatabaseName`<sup>Optional</sup> <a name="defaultDatabaseName" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.defaultDatabaseName"></a>

```typescript
public readonly defaultDatabaseName: string;
```

- *Type:* string
- *Default:* Database is not created in cluster.

Name of a database which is automatically created inside the cluster.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean;
```

- *Type:* boolean
- *Default:* true if removalPolicy is RETAIN, false otherwise

Indicates whether the DB cluster should have deletion protection enabled.

---

##### `enableDataApi`<sup>Optional</sup> <a name="enableDataApi" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.enableDataApi"></a>

```typescript
public readonly enableDataApi: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable the Data API.

> [https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html)

---

##### `parameterGroup`<sup>Optional</sup> <a name="parameterGroup" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.parameterGroup"></a>

```typescript
public readonly parameterGroup: IParameterGroup;
```

- *Type:* aws-cdk-lib.aws_rds.IParameterGroup
- *Default:* no parameter group.

Additional parameters to pass to the database engine.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.SNAPSHOT (remove the cluster and instances, but retain a snapshot of the data)

The removal policy to apply when the cluster and its instances are removed from the stack or replaced during an update.

---

##### `scaling`<sup>Optional</sup> <a name="scaling" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.scaling"></a>

```typescript
public readonly scaling: ServerlessScalingOptions;
```

- *Type:* aws-cdk-lib.aws_rds.ServerlessScalingOptions
- *Default:* Serverless cluster is automatically paused after 5 minutes of being idle. minimum capacity: 2 ACU maximum capacity: 16 ACU

Scaling configuration of an Aurora Serverless database cluster.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* a new security group is created.

Security group.

---

##### `storageEncryptionKey`<sup>Optional</sup> <a name="storageEncryptionKey" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.storageEncryptionKey"></a>

```typescript
public readonly storageEncryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* the default master key will be used for storage encryption

The KMS key for storage encryption.

If you specify the SnapshotIdentifier property, the StorageEncrypted property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified KmsKeyId property is used.

---

##### `subnetGroup`<sup>Optional</sup> <a name="subnetGroup" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.subnetGroup"></a>

```typescript
public readonly subnetGroup: ISubnetGroup;
```

- *Type:* aws-cdk-lib.aws_rds.ISubnetGroup
- *Default:* a new subnet group will be created.

Existing subnet group for the cluster.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the VPC default strategy if not specified.

Where to place the instances within the VPC.

---



