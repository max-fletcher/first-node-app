// STREAMS
// streams are used to read big files that cannot be read in one go. It has be read in chunks so that the file
// doesn't occupy too much memory in the server.

// Summoning the createReadStream function from fs module
const {createReadStream} = require('fs')
// you can use "const createReadStream = require('fs')" and call it using "fs.createReadStream" in subsequent parts
// of the file.

// Read the file in streams. Currently it reads about 65 kb per chunk.
const stream = createReadStream('./content/big.txt')

// the "highWaterMark" param is used to define the size of each chunk in stream. It is optonal though. 90000 means
// it will read 90 kb per chunk.
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, })

// Also you can define the encoding inside the second parameter array object.
// const stream = createReadStream('./content/big.txt', {
//    highWaterMark: 90000,
//    encoding: 'utf-8'
// })

// on receiving data, will execute the nested callback, which right now, will console.log the result.
stream.on('data', (result) => {
   console.log(result)
})

// on receiving error, will execute the nested callback, which right now will just console log the error.
stream.on('error', (error) => {
   console.log(error)
})