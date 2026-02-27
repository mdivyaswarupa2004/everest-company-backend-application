import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as rds from 'aws-cdk-lib/aws-rds';

export class EverestInternsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const vpc = new ec2.Vpc(this, 'EverestVPC', {
      maxAzs: 2,
      natGateways: 0
    });
    const sg = new ec2.SecurityGroup(this, 'EverestSG', {
      vpc,
      allowAllOutbound: true,
      description: 'Allow SSH and App access'
    });
    sg.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'Allow SSH');
    sg.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(3000), 'Allow App');
    sg.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'Allow HTTP');
    sg.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(5432), 'Allow Postgres');
    const role = new iam.Role(this, 'EverestEC2Role', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com')
    });
    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));
    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSNSFullAccess'));
    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('CloudWatchAgentServerPolicy'));
    const database = new rds.DatabaseInstance(this, 'EverestDB', {
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_14
      }),
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T3,
        ec2.InstanceSize.MICRO
      ),
      vpc,
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
      securityGroups: [sg],
      databaseName: 'EverestSoftwareCompanyDB',
      credentials: rds.Credentials.fromPassword(
        'postgres',
        cdk.SecretValue.unsafePlainText('divyaswaroopa')
      ),
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      deletionProtection: false,
      publiclyAccessible: true
    });

    const instance = new ec2.Instance(this, 'EverestInstance', {
      vpc,
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestAmazonLinux2(),
      securityGroup: sg,
      role,
      keyName: 'everest'
    });
    const eip = new ec2.CfnEIP(this, 'EverestEIP', {
      instanceId: instance.instanceId
    });
    new cdk.CfnOutput(this, 'ElasticIP', { value: eip.ref });
    new cdk.CfnOutput(this, 'PublicDNS', { value: instance.instancePublicDnsName });
    new cdk.CfnOutput(this, 'DBHost', { value: database.dbInstanceEndpointAddress });
  }
}