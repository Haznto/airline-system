const eventsEmitter = require('./events');

require('./pilot/pilot')
require('./manager/manager')
eventsEmitter.on('new-flight',handleNewFly)
eventsEmitter.on('took-off',handletookoffFly)
eventsEmitter.on('Arrived',handleArrivedFly)

function handleNewFly(payload){
    console.log('Flight',payload)
}
function handletookoffFly(payload){
    console.log('Flight',payload)
}
function handleArrivedFly(payload){
    console.log('Flight',payload)
}