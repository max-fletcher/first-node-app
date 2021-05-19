// CommomJS, enery file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// importing modules from 4-names.js and 5-utilities.js and 6-alternative-way-to-export.js
const names = require('./4-names')
const sayHi = require('./5-utilities')
const alt_data = require('./6-alternative-way-to-export')

// mind-grenade below contains an executed function inside so that function will execute as soon as this file is
//  executed If this was stored in a variable, the function wouldn't be executed until it is called
require('./7-mind-grenade')

 console.log(alt_data)

console.log(names)

// names is a key value pair so you need to use this format to access them. Though there might be better ways to do so.
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)