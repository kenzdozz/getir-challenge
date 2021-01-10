const app = require('./app');
const config = require('./config');
const Logger = require('./helpers/Logger');

const server = app.listen(config.PORT, () => {
  Logger.log(`app running on http://localhost:${config.PORT}`);
});

module.exports = server;
