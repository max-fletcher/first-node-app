// import fs library (stands for file system). The /promises is method chaining so it uses promises instaed of us
// defining a promise
const fs = require("fs").promises;

// USING THE util MODULE TO MAKE THINGS PROMISE BASED.
// if you don't like the promise format, use this instead. We are currently commenting out the getText function and
// using this. It will convert a function to a promise without doing anything.
// const util = require('util')
// const readFilePromise = util.promisify(fs.readFile)
// const writeFilePromise = util.promisify(fs.writeFile)

// A PROMISE OBJECT
// const getText = (path) => {
// // using an arrow function inside of a promise. (Using arrow function inside a promise is syntatically easier to understand)
//    return new Promise((resolve, reject) => {
//       // read file and then do something in response
//       fs.readFile(path, 'utf-8', (err, result) => {
//          if(err){
//             reject(err);
//          }
//          else{
//             resolve(result)
//          }
//       })
//    })
// }

// PROMISE BASED APPROACH. EXECUTING THE PROMISE MADE ABOVE.
// // sending "./content/first.txt" into path parameter
// getText('./content/first.txt')
//    // .then is the resolve function(callback) for the promise
//    .then(result => console.log(result))
//    // .catch is the reject function(callback) for the promise
//    .catch(err => console.log(err))

// ASYNC AWAIT OBJECT. THE RECOMMENEDE WAY TO DO THINGS.
//You can use async function(){} instead
// Using async await to do asynchronous functions. Not that the try and catch is there so we can do something
// if there are errors. Otherwise, there is no way to do something in response to errors. The Code still works
// without try catch block though.
const start = async () => {
  try {
    const first = await fs.readFile("./content/first.txt", "utf-8");
    const second = await fs.readFile("./content/second.txt", "utf-8");
    await fs.writeFile(
      "./content/mind-grenade.txt",
      `This text is awesome ${first} and ${second}`
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
