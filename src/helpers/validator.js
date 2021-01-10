/**
 * Validates if a given string is date
 * of format 'YYYY-MM-DD'
 * @param {string} str
 */
const isValidDate = (str) => {
  const dateRegEx = /^\d{4}-\d{2}-\d{2}$/;
  if (typeof str !== 'string' || !str.match(dateRegEx)) return false;
  const d = new Date(str);
  const dateNum = d.getTime();
  if (!dateNum && dateNum !== 0) return false;
  return d.toISOString().slice(0, 10) === str;
};

/**
 * Validates request payload
 * @param {object} payload
 */
const validatePayload = (payload) => {
  const {
    startDate, endDate, minCount, maxCount,
  } = payload;

  const errors = {};
  if (typeof minCount !== 'number' || Number.isNaN(minCount)) {
    errors.minCount = '"minCount" is required and must be a number';
  }
  if (typeof maxCount !== 'number' || Number.isNaN(maxCount)) {
    errors.maxCount = '"maxCount" is required and must be a number';
  }
  if (!isValidDate(startDate)) {
    errors.startDate = '"startDate" is required and must be a date with the format "YYYY-MM-DD"';
  }
  if (!isValidDate(endDate)) {
    errors.endDate = '"endDate" is required and must be a date with the format "YYYY-MM-DD"';
  }

  const isValid = !Object.keys(errors).length;

  return { isValid, errors };
};

module.exports = { validatePayload };
