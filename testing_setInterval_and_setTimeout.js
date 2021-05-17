function fname(){
   console.log('Hello !!')
}

function refresh() {
   clearInterval(refreshIntervalId)
}

var refreshIntervalId = setInterval(fname, 1000);
setTimeout(refresh, 10000)