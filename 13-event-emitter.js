// import event emitter
const EventEmitter = require('events')

// create an event emitter object called "customEmitter"
const customEmitter = new EventEmitter()

// use the .on method chaining with the customEmitter. The .on method listens for an event emit. Currently, the event
// name is "response" and this name for the .on and .emit must match. You can name it anything else like "event1" or
// "getData" but the event name must be same for the emitter object that is firing the event and receiving the event.
// Whatever logic is passed as the 2nd parameter (a callback function) will be executed line by line.
// name and id are received from the emitter as parameters after the event name parameter.
customEmitter.on('response', (name, id)=>{
   console.log(`Data Received:`)
   console.log(`Name: ${name}`)
   console.log(`Age: ${id}`)
})

// you can have multiple listeners for a single emitter.
customEmitter.on('response', ()=>{
   console.log('some other task')
})

// use the .emit method chaining with the customEmitter. The .emit method fires an event. Currently, the event
// name is "response" and this name for the .on and .emit must match. You can name it anything else like "event1" or
// "getData" but the event name must be same for the emitter object that is firing the event and receiving the event.
// The emitter must be below the listener. Otherwise, it won't work. "John" and 34 are data we are sending to the listener
// as parameters. It will be populated inside name and id.
customEmitter.emit('response', 'John', 34)