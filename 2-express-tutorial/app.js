// invoke express
const express = require('express')
const app = express()
// importing the products JSON array from the data file
const {products} = require('./data')

//app.get
app.get('/', (req, res)=>{   
   // res.json([{name:'John'}, {name: 'susan'}])
   res.send('<h1> Home Page For You ! Okey Poke !! </h1> <a href="/api/products"> Products </a>')
   // res.json(products)
})

app.get('/api/products/:productID', (req, res) => {   
   // console.log( req )
   // console.log( req.params )
   // const newProducts = products.map((product) => {
   //    const {id, name, image} = product
   //    return {id, name, image}
   // })
   const { productID } = req.params

   const singleProduct = products.find( (product) => {
      return product.id === Number(productID)
   })

   // this block will trigger if the productID is not found
   if(!singleProduct){
      return res.status(404).send('Product Doesn\'t Exist')
   }

   res.status(200).json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{   
   console.log(req.params)
   res.send('<h1> Hello World </a>')
})

app.listen(5000, ()=>{
   console.log('Server is Listening on port 5000...')
})