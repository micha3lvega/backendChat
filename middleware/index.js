// Inicializar express
var express = require('express');
var router = express.Router();

const log4js = require('log4js');
var logger = log4js.getLogger('middleware-index.js');
log4js.configure('./config/log4js.json');
logger.level = process.env.LOG_LEVEL || 'ALL';

router.use(function timeLog(req, res, next) {

    var startTime = Date.now();

    next();

    var durationMilliseconds = Date.now() - startTime;
    logger.debug('Duración de la llamada: %d Segundos', (durationMilliseconds / 1000));

});

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