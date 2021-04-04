var express = require('express');
var router = express.Router();

router.get("/", function (req, res) {
    res.send("Hola mundo -- protocolo get");
});

router.post("/", function (req, res) {
    res.send("Hola mundo -- protocolo post");
});

router.put("/", function (req, res) {
    res.send("Hola mundo -- protocolo put");
});

router.delete("/", function (req, res) {
    res.send("Hola mundo -- protocolo delete");
});

module.exports = router;