const express = require('express');
const route = express.Router();

const app = express();
const port = 3000;

app.use(route);

route.get("/", function(req,res) {
    res.send("Hola mundo -- protocolo get");
});

route.post("/", function(req,res) {
    res.send("Hola mundo -- protocolo post");
});

app.listen(port, () => console.log('Example app listening on port %d!!!', port));

