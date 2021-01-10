const express = require('express');
const RecordController = require('../controllers/RecordController');

/**
 * Routes of '/record'
 */
const recordRouter = express.Router();

recordRouter.route('/')
  .post(RecordController.getRecords)
  .get(RecordController.getRecords);

module.exports = recordRouter;
