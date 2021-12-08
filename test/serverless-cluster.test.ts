import { Template } from "@aws-cdk/assertions";
import { Vpc } from "@aws-cdk/aws-ec2";
import { DatabaseClusterEngine, ParameterGroup } from "@aws-cdk/aws-rds";
import { App, Aspects, SecretValue, Stack } from "@aws-cdk/core";
import { AwsSolutionsChecks } from "cdk-nag";
import { ServerlessClusterFromSnapshot } from "../src";

describe("ServerlessClusterFromSnapshot", () => {
  it("Should create a Serverless Cluster with Aurora Postgres database engine from snapshot", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "Stack");
    const vpc = new Vpc(stack, "Vpc");

    // When
    new ServerlessClusterFromSnapshot(stack, "ServerlessDatabase", {
      engine: DatabaseClusterEngine.AURORA_POSTGRESQL,
      snapshotIdentifier: "serverless-cluster-from-snapshot",
      vpc,
      credentials: {
        username: "admin",
        password: SecretValue.plainText("tooshort"),
      },
      parameterGroup: ParameterGroup.fromParameterGroupName(stack, "ParameterGroup", "default.aurora-postgresql10"),
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
    const vpc = new Vpc(stack, "Vpc");

    // When
    new ServerlessClusterFromSnapshot(stack, "ServerlessDatabase", {
      engine: DatabaseClusterEngine.AURORA_MYSQL,
      snapshotIdentifier: "serverless-cluster-from-snapshot",
      vpc,
      parameterGroup: ParameterGroup.fromParameterGroupName(stack, "ParameterGroup", "default.aurora-postgresql10"),
    });

    // Then
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });

  it("Should comply to best practices", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "Stack");
    const vpc = new Vpc(stack, "Vpc");

    // When
    new ServerlessClusterFromSnapshot(stack, "ServerlessDatabase", {
      engine: DatabaseClusterEngine.AURORA_MYSQL,
      snapshotIdentifier: "serverless-cluster-from-snapshot",
      vpc,
      parameterGroup: ParameterGroup.fromParameterGroupName(stack, "ParameterGroup", "default.aurora-postgresql10"),
    });

    // Then
    Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));
  });
});
