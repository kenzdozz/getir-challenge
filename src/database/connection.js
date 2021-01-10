const mongoose = require('mongoose');
const config = require('../config');

/**
 * Establish connection to mongodb database
 */
mongoose.connect(config.DATABASE_URI, {
  user: process.env.MDB_USER,
  pass: process.env.MDB_PASS,
  keepAlive: 1,
  connectTimeoutMS: 300000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = { mongoose };
