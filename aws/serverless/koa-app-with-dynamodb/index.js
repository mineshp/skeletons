const serverless = require('serverless-http');
const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const { addUser, getUser } = require('./controllers/user');
const convert = require('koa-convert')

const app = new Koa();

const whitelist = process.env.WHITELIST.split(',');

const checkOriginAgainstWhitelist = (ctx) => {
  const requestOrigin = ctx.accept.headers.origin;
  if (!whitelist.includes(requestOrigin)) {
      return ctx.throw(`🙈 ${requestOrigin} is not a valid origin`);
  }
  return requestOrigin;
}

app.use(convert(cors({ origin: checkOriginAgainstWhitelist })));
app.use(koaBody());
app.use(bodyParser({ strict: false }));

const router = new Router();
router.get('/', (ctx) => { ctx.body = JSON.stringify({ message: 'Hello World'}) });
router.get('/users/:userId', getUser);
router.post('/users', addUser);

app.use(router.routes());
module.exports.handler = serverless(app);