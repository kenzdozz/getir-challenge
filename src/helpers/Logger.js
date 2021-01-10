const Logger = {
  log: (...args) => {
    // eslint-disable-next-line no-console
    console.log(new Date().toLocaleString(), '***', ...args);
  },
};

module.exports = Logger;
