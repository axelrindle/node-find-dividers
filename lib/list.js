// Require module
const dividers = require('./');

/**
 * Finds all dividers for a given list of numbers.
 *
 * @param list {array} The number to find dividers for.
 * @param excludeOne {boolean} Whether to exclude the number 1.
 * @return {Map} A Map with all found dividers for each number.
 */
module.exports = (list, excludeOne = true) => {
  let data = new Map();
  for (let n of list) {
    let divs = dividers(n, excludeOne);
    data.set(n, divs)
  }
  return data;
};