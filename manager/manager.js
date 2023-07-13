
const { faker } = require('@faker-js/faker');
let emiratianFlyline = 'Fly Emirates'
const { v4: uuidv4 } = require('uuid');

require('dotenv').config()
let port = process.env.PORT || 3000;
let host = `http://localhost:${port}`
const io = require('socket.io-client')
const socket = io.connect(host)

socket.emit('IamManager')

socket.on('flight-arrival', greetFlight)
socket.on('new-flight', onNewFlight)
function onNewFlight(payload) {
    
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
        socket.emit('new-flight-scheduled' , Flight)
    },10000)
}

function greetFlight(payload) {
    setTimeout(() => {
        console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Details.pilot}`)
    },1)
}
