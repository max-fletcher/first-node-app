const sayHi = function(name){
   console.log('Hello there ' + name + '!!')
   // does the same as above
   console.log(`Hello there ${name} !!`)
}

// ES6 uses somethig like export default{} but node uses this format
module.exports = sayHi