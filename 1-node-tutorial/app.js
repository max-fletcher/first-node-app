var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    // create a stream to our file
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    // event lister that does something on opening the stream
    fileStream.on('open', () => {
      // the pipe method is used to push write streams (in chunks) after read streams (done above by 
      // "createReadStream"). Right now, we are using the res from createServer to stream the result as a 
      // response to a localhost port, which will show if localhost:5000 is fired up.
      fileStream.pipe(res)

      // if you wanted to pipe and push some stream to another file, this could have been done:
      // var fs = require("fs");
      // var readStream = fs.createReadStream("D://datainput.txt");
      // var writeStream = fs.createWriteStream("D://dataOutput.txt");
      // readStream.pipe(writeStream);
      })

    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)
