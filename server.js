const express = require('express');
const route = express.Router();

const NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({
    path: `./env/${NODE_ENV}.env`
});

const log4js = require('log4js');
var logger = log4js.getLogger('server.js');
logger.level = process.env.LOG_LEVEL || 'ALL';

const app = express();
const port = process.env.PORT || 3000;

var indexRoute = require('./middleware/index');
app.use('/', indexRoute);

app.listen(port, () => logger.info('Example app listening on port %d!!!', port));