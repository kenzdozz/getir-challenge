const Record = require('../models/Record');

const RecordServices = {
  aggregateCounts: async ({
    startDate, endDate, minCount, maxCount,
  }) => {
    /**
     * Filter records by createdAt
     * with given startDate and endDate
     */
    const dateMatch = {
      $and: [
        { createdAt: { $gte: new Date(startDate) } },
        { createdAt: { $lte: new Date(endDate) } },
      ],
    };

    /**
     * Select fields to be returned
     * and sum the counts to get totalCount
     */
    const project = {
      _id: 0,
      key: 1,
      totalCount: { $sum: '$counts' },
      createdAt: 1,
    };

    /**
     * Filter records by totalCount
     * with given minCount and maxCount
     */
    const countMatch = {
      $and: [
        { totalCount: { $gte: minCount } },
        { totalCount: { $lte: maxCount } },
      ],
    };

    const records = await Record.aggregate([
      { $match: dateMatch },
      { $project: project },
      { $match: countMatch },
    ]);

    return records;
  },
};

module.exports = RecordServices;
