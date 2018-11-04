const serverless = require('serverless-http');
const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(koaBody());
app.use(bodyParser());

const router = new Router();

console.log('inside index.js');
router.get('/', (ctx) => { ctx.body = 'Hello World!'; });

app.use(router.routes())

module.exports.handler = serverless(app);