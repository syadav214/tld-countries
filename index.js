const data = require('./data.json');
const tldMap = {};

data.forEach(mapTlds);

function mapTlds(element) {
  tldMap[element.code.toLowerCase()] = element.entity;
}

exports.getEntity = tld => {
  return tldMap[tld.toLowerCase()];
};

exports.getTLD = entity => {
  return entity;
};
