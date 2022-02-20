const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const { cdk, javascript } = require("projen");
const project = new AwsCdkConstructLibrary({
  stability: cdk.Stability.DEPRECATED,

  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "2.8.0",
  defaultReleaseBranch: "main",
  name: "@pepperize/cdk-serverless-cluster-from-snapshot",
  description:
    "Deprecated: Use https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds.ServerlessClusterFromSnapshot.html",
  keywords: ["AWS", "CDK", "Serverless", "Cluster", "RDS", "Aurora", "Database", "Snapshot"],
  repositoryUrl: "https://github.com/pepperize/cdk-serverless-cluster-from-snapshot.git",
  testDeps: ["@aws-cdk/assertions"],
  devDeps: ["@pepperize/projen-awscdk-construct@^0.0.8", "cdk-nag@^2.0.0"],

  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.ServerlessClusterFromSnapshot",
  },
  publishToPypi: {
    distName: "pepperize.cdk-serverless-cluster-from-snapshot",
    module: "pepperize_cdk_serverless_cluster_from_snapshot",
  },
});

project.synth();
