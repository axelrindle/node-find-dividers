const dividers = require('./');

const list = [20, 2, 100, 33, 1, 44, 2];

console.log("1 excluded:");
for (n of list) {
  let d = dividers(n);
  console.log("[" + d + "]" + "  =>  " + d.length);
}
console.log();
console.log("1 included:");
for (n of list) {
  let d = dividers(n, false);
  console.log("[" + d + "]" + "  =>  " + d.length);
}
