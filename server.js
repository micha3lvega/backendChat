const express = require('express');
const route = express.Router();

const NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({
    path: `./env/${NODE_ENV}.env`
});

const app = express();
const port = process.env.PORT || 3000;

var indexRoute = require('./middleware/index');
app.use('/', indexRoute);

app.listen(port, () => console.log('Example app listening on port %d!!!', port));
