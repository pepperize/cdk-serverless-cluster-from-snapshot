const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Patrick Florek',
  authorAddress: 'patrick.florek@gmail.com',
  cdkVersion: '2.0.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-serverless-cluster-from-snapshot',
  repositoryUrl: 'https://github.com/patrick.florek/cdk-serverless-cluster-from-snapshot.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();