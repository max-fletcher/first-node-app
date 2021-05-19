// import os modult which is a built in module
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// this method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

// info about current OS e.g type, release/version, total memory and free memory
const currentOS = {
   name: os.type(),
   release: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem(),
}

console.log(currentOS)