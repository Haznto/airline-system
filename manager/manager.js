const eventsEmitter = require('../events')
const { faker } = require('@faker-js/faker');
let emiratianFlyline = 'Fly Emirates'
const { v4: uuidv4 } = require('uuid');
// currentData = new Date();
// console.log(currentData);
require('../pilot/pilot')
eventsEmitter.on('Arrived', greetFlight)


setInterval(() => {
    let event = 'new-flight'
    let Flight = {
        event: 'new-flight',
        time: new Date(),
        Details: {
            airLine: emiratianFlyline,
            destination: faker.location.city(),
            pilot: faker.person.fullName(),
            flightID: uuidv4(),
        }
    }
    console.log(`Manager: new flight with ID ‘${Flight.Details.flightID}’ have been scheduled`)
    eventsEmitter.emit('new-flight' , Flight)
},10000)


function greetFlight(payload) {
    setTimeout(() => {
        console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Details.pilot}`)
    },1)
}