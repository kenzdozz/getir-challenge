const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');

const initializeApp = () => {
  const app = express();

  morgan.token('date', () => new Date().toLocaleString());

  app.use(cors());
  app.use(morgan(':date *** :method :: :url ** :response-time'));
  app.use(express.json());

  app.use(routes);

  return app;
};

const app = initializeApp();

module.exports = app;
