# Serverless Koa Node App

## Deploy Application to AWS

```sls deploy```

## Invoke

### Locally

```sls invoke local --function app```

## Logs

### Check logs of deployed serverless app where app is the name of the functiom
sls logs -f <app-function-name>

```sls logs -f app```

### Optionally tail the logs with -t
```sls logs -f hello -t``` 

## Endpoints

### Set the Base Domain

```export BASE_DOMAIN=<domain-setup-by-serverless>/dev```

### POST /users

```curl -H "Content-Type: application/json" -X POST ${BASE_DOMAIN}/users -d '{"userId": "testUser1", "name": "Test User"}'```

### GET /users/:userId

```curl -H "Content-Type: application/json" -X GET ${BASE_DOMAIN}/users/testUser1```