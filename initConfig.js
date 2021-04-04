const express = require('express');
const route = express.Router();

const NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({
    path: `./env/${NODE_ENV}.env`
})

const log4js = require('log4js');

const app = express();

var indexRoute = require('./middleware/index');
app.use('/', indexRoute);

const port = process.env.PORT || 3000;

exports.app = app;
exports.port = port;
exports.log4js = log4js;