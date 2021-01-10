const StatusCodes = require('./StatusCodes');
const Logger = require('./Logger');

const Response = {
  /**
   * Return response to user
   * @param {express.Response} res
   * @param {number} status
   * @param {object} data
   */
  send: (res, status, data) => res.status(status).send({
    ...data,
  }),

  /**
   * Log error and return server error response.
   * @param {express.Response} res
   * @param {Error} error
   */
  handleError: (res, error) => {
    Logger.log(error);
    return Response.send(res, StatusCodes.SERVER_ERROR, {
      code: 500,
      msg: 'Internal server error',
    });
  },
};

module.exports = Response;
