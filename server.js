var initConfig = require('./initConfig');

var logger = initConfig.log4js;
logger.level = process.env.LOG_LEVEL || 'ALL';

const app = initConfig.app;
const port = initConfig.port;

var indexRoute = require('./middleware/index');
app.use('/', indexRoute);

const port = initConfig.port;
initConfig.app.listen(port, () => logger.info('Example app listening on port %d!!!', port));
