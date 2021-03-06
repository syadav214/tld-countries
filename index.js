const tldData = require('./tld-data.json');
const tldMap = {};
const countryMap = {};

tldData.map(element => {
  tldMap[element.tld.toLowerCase()] = element.country;
  countryMap[element.country.toLowerCase()] = element.tld;
});

exports.getCountry = tld => {
  return tldMap[tld.replace(/\./g, '').toLowerCase()];
};

exports.getTLD = country => {
  return countryMap[country.toLowerCase()];
};

exports.getCountries = () => {
  return tldData.map(ele => {
    return ele.country;
  });
};

exports.getTLDs = () => {
  return tldData.map(ele => {
    return ele.tld;
  });
};

exports.getTLDList = () => tldMap;

exports.getCountryList = () => countryMap;
