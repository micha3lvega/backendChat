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
    logger.debug("Parámetros recibidos: ", req.query);
    logger.debug("Headers recibidos: ", req.headers);
    res.header({
        "customHeader":"header personalizado"
    })
    res.send("Mensaje " + req.query.message);
});

router.post("/", function (req, res) {
    logger.debug("body recibido: ", req.body);
    res.send("Mensaje: " + req.body.message + " añadido correctamente");
});

router.put("/", function (req, res) {
    logger.debug("body recibido: ", req.body);
    res.send("Mensaje: " + req.body.message + " actualizado correctamente");
});

router.delete("/", function (req, res) {
    logger.debug("body recibido: ", req.body);
    res.send("Mensaje: " + req.body.message + " eliminado correctamente");
});

module.exports = router;