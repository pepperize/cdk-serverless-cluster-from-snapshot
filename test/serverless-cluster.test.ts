import { aws_ec2, aws_iam, aws_rds, App, Stack, SecretValue, Aspects } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import { AwsSolutionsChecks } from "cdk-nag";
import { ServerlessClusterFromSnapshot } from "../src";

describe("ServerlessClusterFromSnapshot", () => {
  it("Should create a Serverless Cluster with Aurora Postgres database engine from snapshot", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "Stack");
    const vpc = new aws_ec2.Vpc(stack, "Vpc");

    // When
    new ServerlessClusterFromSnapshot(stack, "ServerlessDatabase", {
      engine: aws_rds.DatabaseClusterEngine.AURORA_POSTGRESQL,
      snapshotIdentifier: "serverless-cluster-from-snapshot",
      vpc,
      credentials: {
        username: "admin",
        password: SecretValue.plainText("tooshort"),
      },
      parameterGroup: aws_rds.ParameterGroup.fromParameterGroupName(
        stack,
        "ParameterGroup",
        "default.aurora-postgresql10",
      ),
    });

    // Then
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::RDS::DBCluster", {
      Engine: "aurora-postgresql",
      DBClusterParameterGroupName: "default.aurora-postgresql10",
      DBSubnetGroupName: {
        Ref: "ServerlessDatabaseSubnets5643CD76",
      },
      EngineMode: "serverless",
      SnapshotIdentifier: "serverless-cluster-from-snapshot",
      VpcSecurityGroupIds: [
        {
          "Fn::GetAtt": ["ServerlessDatabaseSecurityGroupB00D8C0F", "GroupId"],
        },
      ],
    });
  });

  it("Should create a Serverless Cluster", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "Stack");
    const vpc = new aws_ec2.Vpc(stack, "Vpc");

    // When
    new ServerlessClusterFromSnapshot(stack, "ServerlessDatabase", {
      engine: aws_rds.DatabaseClusterEngine.AURORA_MYSQL,
      snapshotIdentifier: "serverless-cluster-from-snapshot",
      vpc,
      parameterGroup: aws_rds.ParameterGroup.fromParameterGroupName(
        stack,
        "ParameterGroup",
        "default.aurora-postgresql10",
      ),
    });

    // Then
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });

  it("Should comply to best practices", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "Stack");
    const vpc = new aws_ec2.Vpc(stack, "Vpc");

    // When
    new ServerlessClusterFromSnapshot(stack, "ServerlessDatabase", {
      engine: aws_rds.DatabaseClusterEngine.AURORA_MYSQL,
      snapshotIdentifier: "serverless-cluster-from-snapshot",
      vpc,
      parameterGroup: aws_rds.ParameterGroup.fromParameterGroupName(
        stack,
        "ParameterGroup",
        "default.aurora-postgresql10",
      ),
    });

    // Then
    Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));
  });

  it("Should expose a db cluster reference", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "Stack");
    const vpc = new aws_ec2.Vpc(stack, "Vpc");

    // When
    const cluster = new ServerlessClusterFromSnapshot(stack, "ServerlessDatabase", {
      engine: aws_rds.DatabaseClusterEngine.AURORA_MYSQL,
      snapshotIdentifier: "serverless-cluster-from-snapshot",
      vpc,
    });

    // Then
    expect(stack.resolve(cluster.dbClusterRef.dbClusterIdentifier)).toEqual({ Ref: "ServerlessDatabase7A7DEDAB" });
    expect(stack.resolve(cluster.dbClusterRef.dbClusterArn)).toEqual(stack.resolve(cluster.clusterArn));
  });

  it("Should grant Data API access", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "Stack");
    const vpc = new aws_ec2.Vpc(stack, "Vpc");
    const cluster = new ServerlessClusterFromSnapshot(stack, "ServerlessDatabase", {
      engine: aws_rds.DatabaseClusterEngine.AURORA_MYSQL,
      snapshotIdentifier: "serverless-cluster-from-snapshot",
      vpc,
    });
    const role = new aws_iam.Role(stack, "Role", { assumedBy: new aws_iam.AccountRootPrincipal() });

    // When
    cluster.grantDataApiAccess(role);

    // Then
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::RDS::DBCluster", { EnableHttpEndpoint: true });
    template.hasResourceProperties("AWS::IAM::Policy", {
      PolicyDocument: {
        Statement: Match.arrayWith([
          {
            Action: [
              "rds-data:BatchExecuteStatement",
              "rds-data:BeginTransaction",
              "rds-data:CommitTransaction",
              "rds-data:ExecuteStatement",
              "rds-data:RollbackTransaction",
            ],
            Effect: "Allow",
            Resource: "*",
          },
        ]),
      },
    });
  });
});
