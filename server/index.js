var koaStatic = require('koa-static');
var koa = require('koa');
var app = koa();

app.use(koaStatic('./server/public/app/templates/'))

app.listen(3000);
