const express = require('express')
// Importing Router
const router = express.Router()

let { people } = require('../data')

// Every route is prefixed with router instead of app since it is using express router. It is then exported at the
// bottom

// GET method
router.get('/', (req,res)=>{
   res.status(200).json({success: true, data: people})
})

// POST method using HTML Form. For the Vanilla JS Form. Postman is not working for this one. Need Body-Parser or
// something.
router.post('/', (req,res) => {
   const {name} = req.body
   if(!name){
      return res.status(400).json({ success:false, msg:'Please Provide Name Value' })
   }
   res.status(201).json({ success:true, person:name })
})

// POST method using JS For Postman Only.
router.post('/postman', (req,res) => {
   const {name} = req.body
   if(!name){
      return res.status(400).json({ success:false, msg:'Please Provide Name Value' })
   }
   // structure of the response if a bit off but since this is just an example, no need to sweat. In a real database
   // we will get to make persistant changes and the data will be formatted automatically
   res.status(201).json({ success:true, data:[...people, name] })
})

router.put('/:id', (req,res) => {
   // if taken from url params
   const {id} = req.params
   // name taken from the from submission
   const {name} = req.body
   // console.log(id, name)
   // res.send(`${name} and ${id}`)

   const person = people.find( (person) => {
      return person.id === Number(id)
   })

   // If person with specified ID is not found, return error message
   if(!person){
      return res.status(400).json({ success:false, msg: `No Person with ID ${id} found !!` })
   }

   // For each array row,
   const newPeople = people.map((person)=>{
      // if the row id matches the params id,
      if(person.id === Number(id)){
         // change the name property of that row
         person.name = name
      }
      return person
   })
   res.status(200).json({success: true, data: newPeople})
})

router.delete('/:id', (req,res)=>{
   const person = people.find( (person) => {
      return person.id === Number(req.params.id)
   })

   // If person with specified ID is not found, return error message
   if(!person){
      return res.status(400).json({ success:false, msg: `No Person with ID ${req.params.id} found !!` })
   }

   // Eliminate/Filter out the row that has the same id as request params id
   const newPeople = people.filter( (person)=>{
      return person.id !== Number(req.params.id)
   })

   return res.status(200).json({success: true, data: newPeople})
})

module.exports = router