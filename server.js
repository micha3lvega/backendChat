const express = require('express');
const route = express.Router();

const app = express();
const port = 3000;

var indexRoute = require('./middleware/index');
app.use('/', indexRoute);

app.listen(port, () => console.log('Example app listening on port %d!!!', port));