const serverless = require('serverless-http');
const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { addUser, getUser } = require('./controllers/user');

const app = new Koa();

app.use(koaBody());
app.use(bodyParser({ strict: false }));

const router = new Router();
router.get('/', (ctx) => { ctx.body = 'Hello World'; });
router.get('/users/:userId', getUser);
router.post('/users', addUser);

app.use(router.routes());
module.exports.handler = serverless(app);