const initConfig = require('./initConfig');

const app = initConfig.app;
const port = initConfig.port;

const log4js = initConfig.log4js;
var logger = log4js.getLogger('server.js');
logger.level = process.env.LOG_LEVEL || 'ALL';

app.listen(port, () => logger.info('Aplicacion inicio con exito por el puerto: %d!!!', port));