const eventsEmitter = require('../events');

eventsEmitter.on('new-flight',handleNewFlight)


function handleNewFlight(payload){
    setTimeout(() => {
        console.log(`Pilot: flight with ID ‘${payload.Details.flightID}’ took-off
        `)
        payload.event = 'took-off';
        payload.time = new Date();
        eventsEmitter.emit('took-off',payload)
    },4000)
    setTimeout(() => {
        console.log(`Pilot: flight with ID ‘${payload.Details.flightID}’ has arrived
        `)
        payload.event = 'Arrived';
        payload.time = new Date()
        eventsEmitter.emit('Arrived',payload)
    },7000)
}