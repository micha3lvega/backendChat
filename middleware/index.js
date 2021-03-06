// Inicializar express
var express = require('express');
var router = express.Router();

const log4js = require('log4js');
var logger = log4js.getLogger('middleware-index.js');
log4js.configure('./config/log4js.json');
logger.level = process.env.LOG_LEVEL || 'ALL';

router.use(function timeLog(req, res, next) {

    logger.info(`[[start]] (timeLog) ${new Date().toLocaleString({
        timeZone: process.env.TZ || 'America/Bogota'
    })}`);
    var startTime = Date.now();

    next();

    var durationMilliseconds = Date.now() - startTime;
    logger.debug(`Duración de la llamada: %d Segundos a la pagina ${req.url}`, (durationMilliseconds / 1000));

});

router.get("/", function (req, res) {
    logger.debug("Parámetros recibidos: ", req.query);
    logger.debug("Headers recibidos: ", req.headers);
    res.header({
        "customHeader": "header personalizado"
    });
    res.status(201).json({
        "body": "Mensaje: " + req.query.message
    });
});

router.post("/", function (req, res) {
    logger.debug("body recibido: ", req.body);
    res.status(201).json({
        "body": `Mensaje: ${req.body.message} añadido correctamente`
    });
});

router.put("/", function (req, res) {
    logger.debug("body recibido: ", req.body);
    res.status(200).json({
        "body": `${req.body.message} actualizado correctamente`
    });
});

router.delete("/", function (req, res) {
    logger.debug("body recibido: ", req.body);
    res.status(200).json({
        "body": `${req.body.message} eliminado correctamente`
    });
});

module.exports = router;