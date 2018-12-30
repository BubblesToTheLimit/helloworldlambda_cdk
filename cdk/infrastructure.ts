import cdk = require('@aws-cdk/cdk')
import cloudwatch = require('@aws-cdk/aws-cloudwatch');
import lambda = require('@aws-cdk/aws-lambda');
import path = require('path');
import { ComparisonOperator } from '@aws-cdk/aws-cloudwatch';

class HelloWorldInfrastructure extends cdk.Stack {
    constructor(parent: cdk.App, name: string, props?: cdk.StackProps) {
        super(parent, name, props);

        const myFn = new lambda.Function(this, "HelloWorldCDK", {
            code: lambda.Code.directory(path.join(__dirname, '../app/')),
            handler: 'main.main',
            runtime: lambda.Runtime.Python36        
        });

        new cloudwatch.Alarm(this, "RuntimeErrors", {
            metric: new cloudwatch.Metric({
                namespace: "AWS/Lambda",
                dimensions: {
                    name: "FunctionName",
                    value: myFn.functionName
                },
                metricName: "Errors"
            }),  
            threshold: 0,
            comparisonOperator: ComparisonOperator.GreaterThanThreshold,
            evaluationPeriods: 1
        });
    }
}

const app = new cdk.App();
new HelloWorldInfrastructure(app, 'HelloWorld');
app.run();