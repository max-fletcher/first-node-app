// This function is going to act a as a middlewear. This will receive the the "req", "res" and "next" as
// parameters despite no parameters being defined in the app.get function.
// There are 2 ways to terminate middleware. 1st is to send a response e.g res.send etc. 2nd is by using the next
// parameter. See below how to use it to pass it onto the next middleware.
const logger = (req, res, next) =>{
   const method = req.method
   const url = req.url
   const time = new Date().getFullYear()
   console.log(method, url, time)
   next()
}

module.exports = logger