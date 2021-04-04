const express = require('express');

const NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({
    path: `./env/${NODE_ENV}.env`
});

const log4js = require('log4js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

var indexRoute = require('./middleware/index');
log4js.configure('./config/log4js.json');
app.use('/', express.static('public'));
app.use('/services', indexRoute);

const port = process.env.PORT || 3000;

exports.app = app;
exports.port = port;
exports.log4js = log4js;