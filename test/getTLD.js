var test = require('tap').test;
var { getTLD } = require('../');

test('get tld from country', t => {
  t.equal(
    getTLD('ascension island'),
    'ac',
    'country "ascension island" should return ac'
  );
  t.type(getTLD('XX'), 'undefined', 'code "XX" should return undefined');
  t.end();
});
