# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### ServerlessClusterFromSnapshot <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshot"></a>

- *Implements:* [`aws-cdk-lib.aws_rds.IServerlessCluster`](#aws-cdk-lib.aws_rds.IServerlessCluster)

A Serverless Cluster restored from a snapshot.

#### Initializers <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.Initializer" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotinitializer"></a>

```typescript
import { ServerlessClusterFromSnapshot } from '@pepperize/cdk-serverless-cluster-from-snapshot'

new ServerlessClusterFromSnapshot(scope: Construct, id: string, props: ServerlessClusterFromSnapshotProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotparameterprops)<span title="Required">*</span> | [`@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps`](#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.parameter.scope" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.parameter.id" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.parameter.props" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotparameterprops"></a>

- *Type:* [`@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps`](#@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`addRotationMultiUser`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotaddrotationmultiuser) | Adds the multi user rotation to this cluster. |
| [`addRotationSingleUser`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotaddrotationsingleuser) | Adds the single user rotation of the master password to this cluster. |
| [`asSecretAttachmentTarget`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotassecretattachmenttarget) | Renders the secret attachment target specifications. |
| [`grantDataApiAccess`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotgrantdataapiaccess) | Grant the given identity to access to the Data API, including read access to the secret attached to the cluster if present. |

---

##### `addRotationMultiUser` <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.addRotationMultiUser" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotaddrotationmultiuser"></a>

```typescript
public addRotationMultiUser(id: string, options: RotationMultiUserOptions)
```

###### `id`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.parameter.id" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotparameterid"></a>

- *Type:* `string`

---

###### `options`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.parameter.options" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotparameteroptions"></a>

- *Type:* [`aws-cdk-lib.aws_rds.RotationMultiUserOptions`](#aws-cdk-lib.aws_rds.RotationMultiUserOptions)

---

##### `addRotationSingleUser` <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.addRotationSingleUser" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotaddrotationsingleuser"></a>

```typescript
public addRotationSingleUser(options?: RotationSingleUserOptions)
```

###### `options`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.parameter.options" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotparameteroptions"></a>

- *Type:* [`aws-cdk-lib.aws_rds.RotationSingleUserOptions`](#aws-cdk-lib.aws_rds.RotationSingleUserOptions)

---

##### `asSecretAttachmentTarget` <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.asSecretAttachmentTarget" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotassecretattachmenttarget"></a>

```typescript
public asSecretAttachmentTarget()
```

##### `grantDataApiAccess` <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.grantDataApiAccess" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotgrantdataapiaccess"></a>

```typescript
public grantDataApiAccess(grantee: IGrantable)
```

###### `grantee`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.parameter.grantee" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotparametergrantee"></a>

- *Type:* [`aws-cdk-lib.aws_iam.IGrantable`](#aws-cdk-lib.aws_iam.IGrantable)

The principal to grant access to.

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`clusterArn`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropertyclusterarn)<span title="Required">*</span> | `string` | The ARN of the cluster. |
| [`clusterEndpoint`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropertyclusterendpoint)<span title="Required">*</span> | [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint) | The endpoint to use for read/write operations. |
| [`clusterIdentifier`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropertyclusteridentifier)<span title="Required">*</span> | `string` | Identifier of the cluster. |
| [`clusterReadEndpoint`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropertyclusterreadendpoint)<span title="Required">*</span> | [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint) | The endpoint to use for read/write operations. |
| [`connections`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropertyconnections)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.Connections`](#aws-cdk-lib.aws_ec2.Connections) | Access to the network connections. |
| [`secret`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropertysecret) | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | The secret attached to this cluster. |

---

##### `clusterArn`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.clusterArn" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropertyclusterarn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* `string`

The ARN of the cluster.

---

##### `clusterEndpoint`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.clusterEndpoint" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropertyclusterendpoint"></a>

```typescript
public readonly clusterEndpoint: Endpoint;
```

- *Type:* [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint)

The endpoint to use for read/write operations.

---

##### `clusterIdentifier`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.clusterIdentifier" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropertyclusteridentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* `string`

Identifier of the cluster.

---

##### `clusterReadEndpoint`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.clusterReadEndpoint" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropertyclusterreadendpoint"></a>

```typescript
public readonly clusterReadEndpoint: Endpoint;
```

- *Type:* [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint)

The endpoint to use for read/write operations.

---

##### `connections`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.connections" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropertyconnections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* [`aws-cdk-lib.aws_ec2.Connections`](#aws-cdk-lib.aws_ec2.Connections)

Access to the network connections.

---

##### `secret`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshot.property.secret" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropertysecret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

The secret attached to this cluster.

---


## Structs <a name="Structs" id="structs"></a>

### ServerlessClusterFromSnapshotProps <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotprops"></a>

Properties to configure an Aurora Serverless Cluster.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ServerlessClusterFromSnapshotProps } from '@pepperize/cdk-serverless-cluster-from-snapshot'

const serverlessClusterFromSnapshotProps: ServerlessClusterFromSnapshotProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`engine`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyengine)<span title="Required">*</span> | [`aws-cdk-lib.aws_rds.IClusterEngine`](#aws-cdk-lib.aws_rds.IClusterEngine) | What kind of database to start. |
| [`snapshotIdentifier`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertysnapshotidentifier)<span title="Required">*</span> | `string` | The identifier for the DB snapshot or DB cluster snapshot to restore from. |
| [`vpc`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The VPC that this Aurora Serverless cluster has been created in. |
| [`backupRetention`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertybackupretention) | [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration) | The number of days during which automatic DB snapshots are retained. |
| [`clusterIdentifier`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyclusteridentifier) | `string` | An optional identifier for the cluster. |
| [`credentials`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertycredentials) | [`aws-cdk-lib.aws_rds.Credentials`](#aws-cdk-lib.aws_rds.Credentials) | Credentials for the administrative user. |
| [`defaultDatabaseName`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertydefaultdatabasename) | `string` | Name of a database which is automatically created inside the cluster. |
| [`deletionProtection`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertydeletionprotection) | `boolean` | Indicates whether the DB cluster should have deletion protection enabled. |
| [`enableDataApi`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyenabledataapi) | `boolean` | Whether to enable the Data API. |
| [`parameterGroup`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyparametergroup) | [`aws-cdk-lib.aws_rds.IParameterGroup`](#aws-cdk-lib.aws_rds.IParameterGroup) | Additional parameters to pass to the database engine. |
| [`removalPolicy`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyremovalpolicy) | [`aws-cdk-lib.RemovalPolicy`](#aws-cdk-lib.RemovalPolicy) | The removal policy to apply when the cluster and its instances are removed from the stack or replaced during an update. |
| [`scaling`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyscaling) | [`aws-cdk-lib.aws_rds.ServerlessScalingOptions`](#aws-cdk-lib.aws_rds.ServerlessScalingOptions) | Scaling configuration of an Aurora Serverless database cluster. |
| [`securityGroups`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertysecuritygroups) | [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)[] | Security group. |
| [`storageEncryptionKey`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertystorageencryptionkey) | [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey) | The KMS key for storage encryption. |
| [`subnetGroup`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertysubnetgroup) | [`aws-cdk-lib.aws_rds.ISubnetGroup`](#aws-cdk-lib.aws_rds.ISubnetGroup) | Existing subnet group for the cluster. |
| [`vpcSubnets`](#pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | Where to place the instances within the VPC. |

---

##### `engine`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.engine" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyengine"></a>

```typescript
public readonly engine: IClusterEngine;
```

- *Type:* [`aws-cdk-lib.aws_rds.IClusterEngine`](#aws-cdk-lib.aws_rds.IClusterEngine)

What kind of database to start.

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.snapshotIdentifier" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertysnapshotidentifier"></a>

```typescript
public readonly snapshotIdentifier: string;
```

- *Type:* `string`

The identifier for the DB snapshot or DB cluster snapshot to restore from.

You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.  After you restore a DB cluster with a SnapshotIdentifier property, you must specify the same SnapshotIdentifier property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the SnapshotIdentifier property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified SnapshotIdentifier property, and the original DB cluster is deleted.

---

##### `vpc`<sup>Required</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.vpc" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The VPC that this Aurora Serverless cluster has been created in.

---

##### `backupRetention`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.backupRetention" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertybackupretention"></a>

```typescript
public readonly backupRetention: Duration;
```

- *Type:* [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration)
- *Default:* Duration.days(1)

The number of days during which automatic DB snapshots are retained.

Automatic backup retention cannot be disabled on serverless clusters. Must be a value from 1 day to 35 days.

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.clusterIdentifier" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyclusteridentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* `string`
- *Default:* A name is automatically generated.

An optional identifier for the cluster.

---

##### `credentials`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.credentials" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertycredentials"></a>

```typescript
public readonly credentials: Credentials;
```

- *Type:* [`aws-cdk-lib.aws_rds.Credentials`](#aws-cdk-lib.aws_rds.Credentials)
- *Default:* A username of 'admin' and SecretsManager-generated password

Credentials for the administrative user.

---

##### `defaultDatabaseName`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.defaultDatabaseName" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertydefaultdatabasename"></a>

```typescript
public readonly defaultDatabaseName: string;
```

- *Type:* `string`
- *Default:* Database is not created in cluster.

Name of a database which is automatically created inside the cluster.

---

##### `deletionProtection`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.deletionProtection" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertydeletionprotection"></a>

```typescript
public readonly deletionProtection: boolean;
```

- *Type:* `boolean`
- *Default:* true if removalPolicy is RETAIN, false otherwise

Indicates whether the DB cluster should have deletion protection enabled.

---

##### `enableDataApi`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.enableDataApi" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyenabledataapi"></a>

```typescript
public readonly enableDataApi: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether to enable the Data API.

> https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html

---

##### `parameterGroup`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.parameterGroup" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyparametergroup"></a>

```typescript
public readonly parameterGroup: IParameterGroup;
```

- *Type:* [`aws-cdk-lib.aws_rds.IParameterGroup`](#aws-cdk-lib.aws_rds.IParameterGroup)
- *Default:* no parameter group.

Additional parameters to pass to the database engine.

---

##### `removalPolicy`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.removalPolicy" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyremovalpolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* [`aws-cdk-lib.RemovalPolicy`](#aws-cdk-lib.RemovalPolicy)
- *Default:* RemovalPolicy.SNAPSHOT (remove the cluster and instances, but retain a snapshot of the data)

The removal policy to apply when the cluster and its instances are removed from the stack or replaced during an update.

---

##### `scaling`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.scaling" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyscaling"></a>

```typescript
public readonly scaling: ServerlessScalingOptions;
```

- *Type:* [`aws-cdk-lib.aws_rds.ServerlessScalingOptions`](#aws-cdk-lib.aws_rds.ServerlessScalingOptions)
- *Default:* Serverless cluster is automatically paused after 5 minutes of being idle. minimum capacity: 2 ACU maximum capacity: 16 ACU

Scaling configuration of an Aurora Serverless database cluster.

---

##### `securityGroups`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.securityGroups" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertysecuritygroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)[]
- *Default:* a new security group is created.

Security group.

---

##### `storageEncryptionKey`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.storageEncryptionKey" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertystorageencryptionkey"></a>

```typescript
public readonly storageEncryptionKey: IKey;
```

- *Type:* [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey)
- *Default:* the default master key will be used for storage encryption

The KMS key for storage encryption.

If you specify the SnapshotIdentifier property, the StorageEncrypted property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified KmsKeyId property is used.

---

##### `subnetGroup`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.subnetGroup" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertysubnetgroup"></a>

```typescript
public readonly subnetGroup: ISubnetGroup;
```

- *Type:* [`aws-cdk-lib.aws_rds.ISubnetGroup`](#aws-cdk-lib.aws_rds.ISubnetGroup)
- *Default:* a new subnet group will be created.

Existing subnet group for the cluster.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="@pepperize/cdk-serverless-cluster-from-snapshot.ServerlessClusterFromSnapshotProps.property.vpcSubnets" id="pepperizecdkserverlessclusterfromsnapshotserverlessclusterfromsnapshotpropspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* the VPC default strategy if not specified.

Where to place the instances within the VPC.

---



