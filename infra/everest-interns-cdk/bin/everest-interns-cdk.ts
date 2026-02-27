import * as cdk from 'aws-cdk-lib';
import { EverestInternsCdkStack } from '../lib/everest-interns-cdk-stack';

const app = new cdk.App();
new EverestInternsCdkStack(app, 'EverestInternsCdkStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});