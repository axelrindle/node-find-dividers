// Require module
const dividers = require('./')

/**
 * Finds all dividers for a given range of numbers.
 *
 * @param from {number} The starting number (inclusive).
 * @param to {number} The ending number (inclusive).
 * @param excludeOne {boolean} Whether to exclude the number 1.
 *
 * @return A Map with all found dividers for each number.
 */
module.exports = (from, to, excludeOne = true) => {
  let data = new Map()
  for (let i = from; i <= to; i++) {
    let divs = dividers(i, excludeOne)
    data.set(i, divs)
  }
  return data
}
