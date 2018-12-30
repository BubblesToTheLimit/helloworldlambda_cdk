## Hello world AWS lambda function ontop of the CDK
 
This repository features fully matured infrastructure code in the AWS ecosystem with the example of a hello world AWS lambda function.

## Core information
* **status**: incomplete, work in progress
* **deployment maturity**: 
  * Continuous deployment
  * Per region first a canary, then a blue-green deployment
  * Automated rollback on failure
  * Meaningful notifications to code committer via Slack after successful / unsuccessful deployment
    * Minimizes the time an engineer stares at a deployment progress bar 
* **infrastructure code**: 
  * Implemented through the CDK (infrastructure **is** code) 
  * CI/CD through CodePipeline and CodeDeploy
    * conveniently configured through the CDK
    * gets rid of all Jenkins problems    
  * Unit tests
  * Follows the `DRY` principle through modularity in the CDK
    * Enables the convenient sharing of mature deployment techniques across different infrastructure codebases, which thereby accelerates the DevOps progress 
* **documentation**: 
  * Automated documentation through sphinx
  * A useful "how to contribute" section

## Prep

Create a GitHub personal access token with access to your fork of the repo, including "admin:repo_hook" and "repo" permissions. Then store the token in Parameter Store:

`aws ssm put-parameter --name GitHubToken --type String --value 12345`

Also follow these instructions if you have never accessed github from CodeBuild: https://www.itonaut.com/2018/06/18/use-github-source-in-aws-codebuild-project-using-aws-cloudformation/ 

## Deploy

Install the AWS CDK CLI: `npm i -g aws-cdk`

Install and build everything: `npm install && npm run build`

## Contribute

1. Download the repo
2. Have it up and running in your AWS account: Follow the instructions in the [Deploy](Deploy) section
3. Make a change to the repository and trigger a deployment
4. Open a PR to this repository

## Credits

Alot of the structure is borrowed from here: https://github.com/aws-samples/aws-reinvent-2018-trivia-game