const test = require('ava');
const findDividers = require('../lib/list');

const subjects = {
  333: 5,
  1: 0,
  4: 2,
  123456789: 11,
  74: 3,
  666: 11
};

const run = (t, excludeOne) => {
  const keys = Object.keys(subjects).map(el => Number.parseInt(el));
  const divs = findDividers(keys, excludeOne);
  keys.forEach(key => {
    t.is(divs.get(key).length, subjects[key] + (excludeOne ? 0 : 1));
  });
};

test('1 excluded', t => run(t, true));
test('1 included', t => run(t, false));