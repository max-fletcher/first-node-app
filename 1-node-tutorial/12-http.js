// create an http object using the http module
const http = require('http')

// create an http object
const server = http.createServer(function(req, res){
   // to see the request and response objects. Refresh the webpage after serving to see the result in terminal.
   // Its not necessary to know every part though.
   // console.log(req)
   // console.log(res)

   if(req.url === '/'){
      // same as 
      // res.write('Welcome to out home page !!')
      // res.end()
      // this sends a response back to the browser. Otherwise, it keeps cycling the event loop.
      res.end('<h1> Welcome To The Home Page !! </h1>')
   }
   else if(req.url === '/about'){
      // same as 
      // res.write('Welcome to out about page !!')
      // res.end()
      // this sends a response back to the browser. Otherwise, it keeps cycling the event loop.
      res.end('<h1> Welcome To The About Page !! </h1>')
   }

   // res.write sends a response (sometimes, in response to a request) to the application
   // res.write('Welcome to out home page !!')
   // end the request
   else{
      // this sends a response back to the browser. Otherwise, it keeps cycling the event loop.
      res.end(' <h1> Oops !! </h1> <p> Can\'t Find the page you are looking for !! </p> <a href="/"> back Home </a> ')
   }
})

// start the server on port 5000
server.listen(5000)