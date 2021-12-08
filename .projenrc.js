const { awscdk, JsonFile } = require("projen");
const { NpmAccess } = require("projen/lib/javascript");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  authorOrganization: true,
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "1.114.0",
  defaultReleaseBranch: "main",
  name: "@pepperize/cdk-serverless-cluster-from-snapshot",
  description:
    "This project provides a CDK construct creating a serverless database cluster from a snapshot with AWS RDS Aurora engine.",
  keywords: ["AWS", "CDK", "Serverless", "Cluster", "RDS", "Aurora", "Database", "Snapshot"],
  repositoryUrl: "https://github.com/patrick.florek/cdk-serverless-cluster-from-snapshot.git",

  cdkDependencies: [
    "@aws-cdk/core",
    "@aws-cdk/aws-ec2",
    "@aws-cdk/aws-iam",
    "@aws-cdk/aws-kms",
    "@aws-cdk/aws-rds",
    "@aws-cdk/aws-secretsmanager",
    "@aws-cdk/cx-api",
  ],
  cdkTestDependencies: ["@aws-cdk/assertions"],
  devDeps: ["cdk-nag"],

  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ["pflorek"], secret: "GITHUB_TOKEN" },
  depsUpgradeOptions: {
    workflowOptions: {
      secret: "PROJEN_GITHUB_TOKEN",
    },
  },

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

  eslint: true,
  eslintOptions: {
    prettier: true,
  },

  gitignore: [".idea"],
});

project.setScript("format", "prettier --write 'src/**/*.ts' test/**/*.ts '.projenrc.js' 'README.md'");

new JsonFile(project, ".prettierrc", {
  obj: {
    printWidth: 120,
  },
  marker: false,
});

project.synth();
