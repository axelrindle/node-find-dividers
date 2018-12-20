const test = require('ava');
const findDividers = require('../lib/range');

const subjects = {
  1: 0,
  2: 1,
  3: 1,
  4: 2,
  5: 1,
  6: 3,
  7: 1,
  8: 3,
  9: 2,
  10: 3
};

const run = (t, excludeOne) => {
  const keys = Object.keys(subjects).map(el => Number.parseInt(el));
  const divs = findDividers(1, 10, excludeOne);
  keys.forEach(key => {
    t.is(divs.get(key).length, subjects[key] + (excludeOne ? 0 : 1));
  });
};

test('1 excluded', t => run(t, true));
test('1 included', t => run(t, false));