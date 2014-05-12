var koaStatic = require('koa-static');
var koa = require('koa');
var router = require('koa-router');
var mongoose = require('mongoose');
var config = require('./config/development.js');
var app = koa();

var routes = require('./config/routes.js');

mongoose.connect(config.connectionString);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  app.use(router(app));
  app.use(koaStatic('./server/public/app/'));

  routes(app);

  app.listen(config.port);
});
