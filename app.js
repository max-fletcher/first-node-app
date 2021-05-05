// CommomJS, enery file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// importing modules from 4-names.js and 5-utilities.js
const names = require('./4-names')
const sayHi = require('./5-utilities')
const alt_data = require('./6-alternative-way-to-export')

require('./7-mind-grenade')

 console.log(alt_data)

console.log(names)

// names is a key value pair so you need to use this format to access them. Though there might be better ways to do so.
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)