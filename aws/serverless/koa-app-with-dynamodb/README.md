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