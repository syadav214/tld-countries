const data = require('./data.json');
const tldMap = {};
const countryMap = {};

data.forEach(mapTlds);

function mapTlds(element) {
  tldMap[element.code.toLowerCase()] = element.country;
  countryMap[element.country.toLowerCase()] = element.code;
}

exports.getCountry = tld => {
  return tldMap[tld.toLowerCase()];
};

exports.getTLD = country => {
  return countryMap[country.toLowerCase()];
};

exports.getCountries = () => {
  return data.map(ele => {
    return ele.country;
  });
};

exports.getTLDs = () => {
  return data.map(ele => {
    return ele.code;
  });
};

exports.getTLDList = () => tldMap;

exports.getCountryList = () => countryMap;
