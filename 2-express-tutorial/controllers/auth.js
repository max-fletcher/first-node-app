const login = (req,res) => {
   console.log(req.body)
   // validating if name was provided
   const {name} = req.body
   if(!name){
      return res.status(400).json({ success:false, msg:'Please Provide Name Value' })
   }
   return res.status(200).send(`Welcome ${name}`)
}

module.exports = {
   login
}