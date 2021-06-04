const e = require("express")

const authorize = (req, res, next) => {
   // Store a query string inside the user variable. This is called a deconstructing assignment. Google it if you want.
   const {user} =  req.query
   if(user == 'john'){
      req.user ={name:'john', id: 3}
      next()
   }
   else{
      res.status(403).send('unauthorized')
   }   
}

module.exports = authorize