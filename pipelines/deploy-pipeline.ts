#!/usr/bin/env node
import cdk = require('@aws-cdk/cdk');
import { GenericCfnPipeline } from './generic-pipeline';

class HelloWorldInfraPipelineStack extends cdk.Stack {
    constructor(parent: cdk.App, name: string, props?: cdk.StackProps) {
        super(parent, name, props);

        new GenericCfnPipeline(this, 'Pipeline', {
            pipelineName: 'infra',
            stackName: 'Infra',
            templateName: 'Infra',
            directory: 'cdk'
        });
    }
}

const app = new cdk.App();
new HelloWorldInfraPipelineStack(app, 'HelloWorldInfraPipeline');
app.run();