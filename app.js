/*var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var flash = require('connect-flash');
var validator = require('express-validator');*/
// view engine setup

//ESM
import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
var app = express();
import bodyParser from 'body-parser';
import flash from 'connect-flash';
import validator from 'express-validator';

//app.set('views', path.join(__dirname, 'views'));
app.set('views','./views');
app.set('view engine', 'ejs');
// session
//var session = require("express-session")
import session from 'express-session';
app.use(express.static("public"));
app.use(session({ secret: 'mysupersecret', resave: true, saveUninitialized: true }));
app.use(flash());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator());
app.use(cookieParser());
app.use(express.static('/public'));

// routes
/*var routes = require('./routes/index');
var login = require('./routes/login');
var messageBoard = require('./routes/messageBoard');
var signup = require('./routes/signup');
var user = require('./routes/user');*/
import routes from './routes/index.js';
import login from './routes/login.js';
import messageBoard from './routes/messageBoard.js';
import signup from './routes/signup.js';
import user from './routes/user.js';
app.use('/', routes);
app.use('/login', login);
app.use('/signup', signup);
app.use('/user', user);
app.use('/messageBoard', messageBoard);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
//module.exports = app;
//export {app};
//使用express4

//app.set('port', process.env.PORT || 3000);

//var server = app.listen(app.get('port'), function() {
//debug('Express server listening on port ' + server.address().port);
//});
var port =process.env.PORT  ||3000;
app.listen(port);