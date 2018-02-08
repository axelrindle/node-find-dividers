module.exports = (n, excludeOne = true) => {
  let list = []
  for (var i = 1; i <= n; i++) if (n % i == 0) list.push(i)
  if (excludeOne) list = list.filter(n => n !== 1)
  return list
};
