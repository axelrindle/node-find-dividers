const test = require('ava');
const findDividers = require('../lib/');

const subjects = {
  333: 5,
  1: 0,
  4: 2,
  123456789: 11,
  74: 3,
  666: 11
};

const run = (t, excludeOne) => {
  for (let subject in subjects) {
    const divs = findDividers(Number.parseInt(subject), excludeOne);
    t.is(divs.length, subjects[subject] + (excludeOne ? 0 : 1));
  }
};

test('1 excluded', t => run(t, true));
test('1 included', t => run(t, false));