// invoke express
const express = require('express')
const app = express()

// invoke built-in path module
const path = require('path')

// app.use
// setup static and middleware
// summon all files/resources (e.g html, stylesheets, JS files and images) from folder named public
app.use(express.static('./public'))

// We don't need this anymore since we are using app.use to summon all files. Later, we can use the SSR templating
// engine

//app.get
// app.get('/', (req, res)=>{
//    // using node's built-in path module to define what file to send back as response
//    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//    //console.log('User Hit the Resource')
//    //res.status(200).send('Home Page')
//    adding to static assets
//    SSR
// })

//app.get
app.get('/about', (req, res)=>{
   console.log('User Hit About Page')
   res.status(200).send('About Page')
})

//app.all
// This us used to define what is sent back as response if the url doesn't match. The * means all.
app.all('*', (req, res)=>{
   res.status(404).send("<h1> Resource Not Found </h1>")
})

//app.post
//app.put
//app.delete
//app.listen
app.listen(5000, ()=>{
   console.log('Listening to Server...')
})