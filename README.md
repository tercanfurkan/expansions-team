# A serverless node.js app running on AWS Lambda

## Setup

Run this command to initialize a new project in a new working directory.

```
npm install
```

## Usage

### Deployment

In order to deploy, you need to run the following command:

```
$ serverless deploy
```

After running deploy, you should see output similar to:

```bash
Deploying expansions-team to stage dev (us-east-1)

✔ Service deployed to stack expansions-team (112s)

functions:
  hello: expansions-team-hello (1.5 kB)
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke --function hello
```

Which should result in response similar to the following:

```json
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": {}\n}"
}
```

You can also invoke the deployed function using curl:

```bash
curl https://xxxxxxxxx.execute-api.us-east-1.amazonaws.com/
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```
