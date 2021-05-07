// using sync means one user will be served and until his request has been fulfilled, other users will not be
// served concurrently

// import fs library (stands for file system)
const fs = require('fs')
console.log('start')

// non-blocking anynchronous way to read and write file
// the 2nd parameter will define how to encode the data before writing to file. utf-8 is standard keyboard encoding.
const first = fs.readFileSync('./content/first.txt', 'utf-8')
const second = fs.readFileSync('./content/second.txt', 'utf-8')

// if you used
// const { readFileSync, writeFileSync} = require('fs')
// then you would only need to do this as it imports functions directly(need to understand theis furthur)
// const first = readFileSync('./content/first.txt', 'utf-8')
// const second = readFileSync('./content/second.txt', 'utf-8')

// output the files
console.log(first, second)

// write on a file. 1st parameter is the file path. If it exists, will not create new file. 2nd parameter is the text
// to be written or a containing a string variable. 3rd parameter (flag) is optional. The current flag appends so
// the contents of the file will not be overwritten. Instead it will append to it. Absence of this flag will overwrite.
// There are more flags but you need to see them yourself.
fs.writeFileSync('./content/result-sync.txt', `Here\' the result ${first}, ${second}`, {flag: 'a'})
console.log('done with this task')
console.log('starting the next one')