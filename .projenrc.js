const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const { NpmAccess } = require("projen/lib/javascript");
const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "2.8.0",
  defaultReleaseBranch: "main",
  name: "@pepperize/cdk-serverless-cluster-from-snapshot",
  description:
    "This project provides a CDK construct creating a serverless database cluster from a snapshot with AWS RDS Aurora engine.",
  keywords: ["AWS", "CDK", "Serverless", "Cluster", "RDS", "Aurora", "Database", "Snapshot"],
  repositoryUrl: "https://github.com/pepperize/cdk-serverless-cluster-from-snapshot.git",
  testDeps: ["@aws-cdk/assertions"],
  devDeps: ["@pepperize/projen-awscdk-construct@^0.0.8", "cdk-nag"],

  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
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
