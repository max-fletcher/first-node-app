// create an http object using the http module
const http = require('http')

// create an http object
const server = http.createServer()
   // to see the request and response objects. Refresh the webpage after serving to see the result in terminal.
   // Its not necessary to know every part though.
   // console.log(req)
   // console.log(res)

  // using an event listener on the server object. In the docs, it is mentioned that the server object is capable
  // of listening to a request event. To see the full list of events that the server object can listen for, see the
  // docs. There are plenty of objects inside built-in modules capable of listening to events.
  server.on('request', (req, res) => {
    if(req.url === '/'){
      res.end('<h1> Welcome To The Home Page !! </h1>')
    }
    else if(req.url === '/about'){
      res.end('<h1> Welcome To The About Page !! </h1>')
    }
    else{
      res.end(' <h1> Oops !! </h1> <p> Can\'t Find the page you are looking for !! </p> <a href="/"> back Home </a> ')
    }
  })

// start the server on port 5000
server.listen(5000)