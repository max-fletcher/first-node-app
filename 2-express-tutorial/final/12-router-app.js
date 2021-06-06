// invoke express
const express = require('express')
const app = express()

// import routes from people.js and auth.js
const people = require('./routes/people')
const auth = require('./routes/auth')

app.use(express.static('./methods-public'))

// parse form data using this middleware. Used for post requests using form.
app.use(express.urlencoded({ extended:false }))

// parse form data using this middleware. Used for post requests using JS.
app.use(express.json())

// import the people.js from the router folder
app.use('/api/people', people)

// import the auth.js from the router folder
app.use('/login',auth)

app.listen(5000, ()=>{
  console.log('Server is Listening on port 5000...')
})