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

route.put("/", function(req,res) {
    res.send("Hola mundo -- protocolo put");
});

route.delete("/", function(req,res) {
    res.send("Hola mundo -- protocolo delete");
});

app.listen(port, () => console.log('Example app listening on port %d!!!', port));

