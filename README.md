# tld-countries

## Example
https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains

``` js
const { getCountry, getTLD } = require('tld-countries');

console.log(getName('in')); // India
console.log(getTLD('India')); // in
console.log(getTLD('Nothing')); // undefined
```

### getCountry(tld)

Expects a top level domains(tld).  
Returns the name for that country.  
If not found, it returns `undefined`.  

### getTLD(country)

Expects the English country name.  
Returns the tld for that country.  
If not found, it returns `undefined`.  

### getCountries()

Returns an array of all country names.

### getTLDs()

Returns an array of all top level domains(tld).

### getCountries()

Returns a key-value object of all countries using the name as key.

### getTLDList()

Returns a key-value object of all top level domains(tld) using the tld as key.

## Install

``` cli
npm install tld-countries
```

## License

MIT
