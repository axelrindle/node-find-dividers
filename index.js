/**
 * Finds all dividers for a given number.
 *
 * @param n {number} The number to find dividers for.
 * @param excludeOne {boolean} Whether to exclude the number 1.
 * @return An array with all found dividers.
 */
module.exports = (n, excludeOne = false) => {
  let list = []
  for (var i = 1; i <= n; i++) if (n % i == 0) list.push(i)
  if (excludeOne) list = list.filter(n => n !== 1)
  return list
};
