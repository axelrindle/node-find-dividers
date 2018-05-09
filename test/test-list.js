const dividers = require('../lib/list');

const list = [20, 2, 100, 33, 1, 44, 2];

console.log();
console.log("1 excluded:");
console.log(dividers(list));

console.log();
console.log("1 included:");
console.log(dividers(list, false));
