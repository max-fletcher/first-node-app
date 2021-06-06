// import data json array
let { people } = require('../data')

const getPeople = (req,res)=>{
   res.status(200).json({success: true, data: people})
}

const createPerson = (req,res) => {
   const {name} = req.body
   if(!name){
      return res.status(400).json({ success:false, msg:'Please Provide Name Value' })
   }
   res.status(201).json({ success:true, person:name })
}

const createPersonPostman =  (req,res) => {
   const {name} = req.body
   if(!name){
      return res.status(400).json({ success:false, msg:'Please Provide Name Value' })
   }
   // structure of the response if a bit off but since this is just an example, no need to sweat. In a real database
   // we will get to make persistant changes and the data will be formatted automatically
   res.status(201).json({ success:true, data:[...people, name] })
}

const updatePerson = (req,res) => {
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
}

const deletePerson = (req,res)=>{
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
}

// export each function
module.exports = {
   getPeople,
   createPerson,
   createPersonPostman,
   updatePerson,
   deletePerson
}