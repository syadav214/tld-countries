const test = require('tap').test;
const { getCountry } = require('../');

test('get country from tld', t => {
  t.equal(
    getCountry('ac'),
    'Ascension Island',
    'code "AC" should return Ascension Island'
  );
  t.type(getCountry('XX'), 'undefined', 'code "XX" should return undefined');
  t.end();
});
