const Response = require('../helpers/Response');
const { validatePayload } = require('../helpers/validator');
const StatusCodes = require('../helpers/StatusCodes');
const RecordServices = require('../database/services/RecordService');

const RecordController = {
  /**
  * This handles getting records.
  * @param {express.Request} req Express request param
  * @param {express.Response} res Express response param
  */
  getRecords: async (req, res) => {
    try {
      const {
        startDate, endDate, minCount, maxCount,
      } = req.body;

      /**
       * Validate if request body contains required JSON payload
       * and return error is available
       */
      const validate = validatePayload(req.body);
      if (!validate.isValid) {
        return Response.send(res, StatusCodes.BAD_REQUEST, {
          code: 400,
          msg: 'Invalid request payload, check the errors object for more.',
          errors: validate.errors,
        });
      }

      const records = await RecordServices.aggregateCounts({
        startDate, endDate, maxCount, minCount,
      });

      return Response.send(res, StatusCodes.SUCCESS, { code: 0, msg: 'Success', records });
    } catch (error) { return Response.handleError(res, error); }
  },
};

module.exports = RecordController;
