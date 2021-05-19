const path = require('path')

// shows the path separator for the current platform (for windows, it is '/' e.g c:/xampp/htdocs)
console.log(path.sep)

// define a file path. This will resolve into content/subfolder/test.txt
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// The base filename
const base = path.basename(filePath)
console.log(base)

// get the absolute path fot the test.txt file. __dirname gets the url of the current directory
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)