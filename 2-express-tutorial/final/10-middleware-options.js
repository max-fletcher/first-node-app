// invoke express
const express = require('express')
const app = express()

// 3rd party middleware called morgan
const morgan = require('morgan')

// importing the logger function inside logger.js. The function in that is used as middleware
const logger = require('./logger')
const authorize = require('./authorize')

// use the morgan tiny function as middleware. It tell you how fast your page loads along with url and request method.
// it is used globally in this file so any route will execute this middleware.
app.use(morgan('tiny'))

// Using logger as middleware. Also, order matters. Placing it below any app.get will cause this to apply
// to any app.get below it but not to the app.get above it. Also, the first argument is the route prefix the
// middleware will be applied to.
// This is how you execute multiple middlewares. They are executed in order from left to right.
app.use('/api', [logger, authorize])

// req =>middleware => res
// Any function that the app.get gets as a parameter not as callback will act as a middleware. "logger" 
// right now is the middleware. It automatically receives the "req", "res" and "next" as parameters.
// app.get('/', logger,(req,res)=>{
//    res.send('Home')
// })

// we have 2 options for applying middleware:
// 1. app.use vs route
// 2. options - 
//   a) our own e.g authorize.js
//   b) express e.g app.use(express.static('./public))
//   c) third party e.g morgan

app.get('/', (req,res)=>{
   res.send('Home')
})

app.get('/about', (req,res)=>{
   res.send('About')
})

app.get('/api/products', (req,res)=>{
   res.send('Products')
})

// when this route is executed with a query string (e.g http://localhost:5000/api/items?user=john), the user
// variable inside the authorize middleware will be fetched and console logged since it was stored in authorize.js.
// Also, the middle parameter is an array of middlewares, in case you want the middlewares to be applied to
// specific routes as opposed to all of them.
app.get('/api/items', [logger, authorize], (req,res)=>{
   console.log(req.user)
   res.send('items')
})

app.listen(5000, ()=>{
   console.log('Server is Listening on port 5000...')
})