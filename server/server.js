let express = require('express');
let path = require('path');
let  logger = require('morgan');
let routes = require('./routes/index');
const mongoose     = require('mongoose');
//const socketEvents = require('./socketEvents')
const config       = require('./config/config');
let bodyParser = require('body-parser');

let port = process.env.PORT || 80;
let favicon = require('serve-favicon');
let app = express();

// database setup
mongoose.connect(config.database);

if(process.env.NODE_ENV !== "development"){
  app.use('/public/assets/', express.static(path.join(__dirname, 'public')));  
}
app.set('views', path.join(__dirname, 'public/views'));
app.use(favicon('./public/favicon.ico'));
app.use(logger('dev'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

// Only load this middleware in dev mode (important).

if (process.env.NODE_ENV=== 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var configWebpack = require('../webpack.config');

  app.use(webpackMiddleware(webpack(configWebpack), {
    publicPath: "/public/assets/",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));

}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var server = app.listen(port, function () {
  console.log('listening on port ',port);
});
