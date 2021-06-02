const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
// This gets rid of the need to define routes to different files(a.k.a static assets) since doing so might become
//  tedious at one point
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
