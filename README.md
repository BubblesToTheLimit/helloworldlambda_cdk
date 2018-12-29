## Hello world lambda build with the CDK

The aim of this repository is to have a state-of-the-art infrastructure repository for a hello world function.

Core information:
* **status**: doesn't work yet, I'm still doing the initial bootstrap
* **deployment maturity**: Continuous deployment ontop of canary and blue-green
* **infrastructure code**: infrastructure *is* code, implemented through the CDK
* **documentation**: Automated documentation through sphinx

## Deploy

Install the AWS CDK CLI: `npm i -g aws-cdk`

Install and build everything: `npm install && npm run build`

## Credits

Alot of the structure is borrowed from here: https://github.com/aws-samples/aws-reinvent-2018-trivia-game