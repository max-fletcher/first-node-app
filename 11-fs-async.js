// using sync means multiple concurrent users will be served

console.log('start')
// import fs library (stands for file system)
const fs = require('fs')

// a blocking synchronous function that has a callback as an argument. This has another callback(writeFile) in it.
// Its not a good design choice as it creates a callback hell. There are better ways to approach the design.
fs.readFile('./content/first.txt', 'utf-8', function(err, result){
   if(err){
      console.log(err)
      return
   }
   // console.log(result)
   const first = result
   fs.readFile('./content/second.txt', 'utf-8', function(err, result){
      if(err){
         console.log(err)
         return
      }
      const second = result
      fs.writeFile(
         './content/result-async.txt', `Here is the Result: ${first}, ${second}`, function(err, result){
            if (err) {
               console.log(err)
               return
            }
            console.log('Done with this task')
         }
      )
   })
})
console.log('Starting Next Task')