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

// Route with 1 query parameter which searches from a json file and returns a set/row of data.
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

// a route with 2 query parameters. You can see that it will be displayed as key value pairs if you console.log
app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{
  console.log(req.params.reviewID)
   // to access a particular query parameter, use these
  console.log(req.params.reviewID)
  console.log(req.params.productID)
  res.send('<h1> Query Parameters Page </a>')
})

app.get('/api/v1/query', (req, res)=>{
  console.log(req.query)
   // store the query string parameters in variables "search" and "limit"
  const {search, limit} = req.query
   // here we are using the spread operator to copy stuff. Otherwise, JS will either copy by reference or do
   // nested copy. Using the spread operator is the best way to copy arrays and objects.
  let sortedProducts = [...products]

   // filter if the product has name equal to the string parameter "search"
  if(search){
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)
      })
  }

   // return the specified number of results. So if limit=2, then the first 2 results will be returned
  if(limit){
      sortedProducts = sortedProducts.slice(0, Number(limit))
  }

   // If search did not find any result
  if(sortedProducts.length < 1){
      //res.status(200).send('No Products Matched Your Search')
      return res.status(200).json({ success: true, data: [] })
  }

   // when returning a response, remember to use return for if else conditions. Otherwise, node throws an error.
   // The final response doesn't need any return though.
  
  res.status(200).json(sortedProducts)
   // res.send('<h1> Query String Page </a>')
})

app.listen(5000, ()=>{
  console.log('Server is Listening on port 5000...')
})