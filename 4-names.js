// local since this is not exported using module.exports
const secret = 'SUPER SECRET'
// global/shared
const john = 'john'
const peter = 'peter'


// sharing these 2 variables globally so other node files can access them
// ES6 uses somethig like export default{} but node uses this format
module.exports= { john, peter }