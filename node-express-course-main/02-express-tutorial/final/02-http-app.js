const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homepage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
   // console log the request method e,g GET, POST etc,
   console.log(req.method)
   // console log current url
   console.log(req.url)
   //console.log(req)
   console.log('User Has Hit Server !!')

   const url = req.url
   if(url === '/'){
      // Provides headers/metadata to the browser
      res.writeHead(200, {'content-type' : 'text/html'})
      // res.end and res.write will write data/html etc to the browser
      res.write(homepage)
      // this sends a response back to the browser. Otherwise, it keeps cycling the event loop.
      res.end()
   }
   // about page
   else if(url === '/about'){
      // Provides headers/metadata to the browser
      res.writeHead(200, {'content-type' : 'text/html'})
      // res.end and res.write will write data/html etc to the browser
      res.write("<h1> About Page !! </h1>")
      // this sends a response back to the browser. Otherwise, it keeps cycling the event loop.
      res.end()
   }
   //styles
   else if(url === '/styles.css'){
      // Provides headers/metadata to the browser
      res.writeHead(200, {'content-type' : 'text/css'})
      // res.end and res.write will write data/html etc to the browser
      res.write(homeStyles)
      // this sends a response back to the browser. Otherwise, it keeps cycling the event loop.
      res.end()
   }
   // image/logo
   else if(url === '/logo.svg'){
      // Provides headers/metadata to the browser
      res.writeHead(200, {'content-type' : 'image/svg+xml'})
      // res.end and res.write will write data/html etc to the browser
      res.write(homeImage)
      // this sends a response back to the browser. Otherwise, it keeps cycling the event loop.
      res.end()
   }
   // JS logic for dropdown and such
   else if(url === '/browser-app.js'){
      // Provides headers/metadata to the browser
      res.writeHead(200, {'content-type' : 'text/javascript'})
      // res.end and res.write will write data/html etc to the browser
      res.write(homeLogic)
      // this sends a response back to the browser. Otherwise, it keeps cycling the event loop.
      res.end()
   }
   else{
      // Provides headers/metadata to the browser
      res.writeHead(404, {'content-type' : 'text/html'})
      // res.end and res.write will write data/html etc to the browser
      res.write("<h1> Page Not Found !! </h1>")
      // this sends a response back to the browser. Otherwise, it keeps cycling the event loop.
      res.end()
   }
})

server.listen(5000)