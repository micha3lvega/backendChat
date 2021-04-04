// Importar archivo con las propiedades iniciales
const initConfig = require('./initConfig');

// Importar configuración para express
const app = initConfig.app;

// Importar puerto
const port = initConfig.port;

// Importar y configurar log
const log4js = initConfig.log4js;
var logger = log4js.getLogger('server.js');
log4js.configure('./config/log4js.json');
logger.level = process.env.LOG_LEVEL || 'ALL';

// Iniciar aplicación
app.listen(port, () => logger.info('Aplicación inicio con éxito por el puerto: %d!!!', port));