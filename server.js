var initConfig = require('./initConfig');

var indexRoute = require('./middleware/index');
initConfig.app.use('/', indexRoute);

const logger = initConfig.log4js.getLogger('server.js');
logger.level = process.env.LOG_LEVEL || 'ALL';

const port = initConfig.port;

initConfig.app.listen(port, () => logger.info('Example app listening on port %d!!!', port));