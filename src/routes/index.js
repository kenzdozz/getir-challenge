const { Router } = require('express');
const Response = require('../helpers/Response');
const StatusCodes = require('../helpers/StatusCodes');
const recordRouter = require('./record');

const setupRoutes = () => {
  const router = new Router();
  router.use('/v1/records', recordRouter);

  router.get('/', (req, res) => Response.send(res, StatusCodes.SUCCESS, {
    msg: 'This app is running.',
  }));

  router.get('*', (req, res) => Response.send(res, StatusCodes.NOT_FOUND, {
    msg: 'Endpoint not found.',
  }));
  return router;
};

module.exports = setupRoutes();
