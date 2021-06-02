// invoke express
const express = require('express')
const app = express()

// importing the logger function inside logger.js. The function in that is used as middleware
const logger = require('./logger')

// Using logger as middleware. Also, order matters. Placing it below any app.get will cause this to apply
// to any app.get below it but not to the app.get above it. Also, the first argument is the route prefix the
// middleware will be applied to.
app.use('/api',logger)

// req =>middleware => res
// Any function that the app.get gets as a parameter not as callback will act as a middleware. "logger" 
// right now is the middleware. It automatically receives the "req", "res" and "next" as parameters.
// app.get('/', logger,(req,res)=>{
//    res.send('Home')
// })

app.get('/', (req,res)=>{
   res.send('Home')
})

app.get('/about', (req,res)=>{
   res.send('About')
})

app.get('/api/products', (req,res)=>{
   res.send('Products')
})

app.get('/api/items', (req,res)=>{
   res.send('items')
})

app.listen(5000, ()=>{
   console.log('Server is Listening on port 5000...')
})