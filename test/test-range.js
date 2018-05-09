const dividers = require('../lib/range');

// range 10 to 50, more than 5 dividers
let divs = dividers(10, 50);
divs.forEach((val, key, map) => {
  if (val.length < 5) map.delete(key);
});

console.log();
console.log(divs);
console.log(divs.size);
