// invoke express
const express = require('express')
const app = express()
// importing the products JSON array from the data file
const {products} = require('./data')

//app.get
app.get('/', (req, res)=>{
   // res.json([{name:'John'}, {name: 'susan'}])
   res.json(products)
})

app.listen(5000, ()=>{
   console.log('Server is Listening on port 5000...')
})