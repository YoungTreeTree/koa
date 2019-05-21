const Koa = require('koa');

const app = new Koa();
var bodyParser = require('koa-bodyparser');

app.use(bodyParser());
require('./routes')(app);


app.listen(3000);