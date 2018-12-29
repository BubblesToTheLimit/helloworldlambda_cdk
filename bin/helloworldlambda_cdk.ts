#!/usr/bin/env node
import cdk = require('@aws-cdk/cdk');
import { HelloworldlambdaCdkStack } from '../lib/helloworldlambda_cdk-stack';

const app = new cdk.App();
new HelloworldlambdaCdkStack(app, 'HelloworldlambdaCdkStack');
app.run();
