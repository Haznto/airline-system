require('dotenv').config()
let port = process.env.PORT || 3000;
let host = `http://localhost:${port}`
let host2 = `http://localhost:${port}/airline`
const io = require('socket.io-client')
let socket = io.connect(host)
let socket2 = io.connect(host2)

socket.emit('get-all')
socket.on('flight',handleOnFightNotCatched)
socket.on('new-flight-scheduled',handleArrived)
socket.on('new-flight-scheduled',handleTookOff)


function handleTookOff(payload){
    setTimeout(() => {
        console.log(`Pilot: flight with ID ‘${payload.Details.flightID}’ took-off
        `)
        payload.event = 'took-off';
        payload.time = new Date();
        socket2.emit('took-off',payload)
    },4000)
}

function handleArrived(payload){  
    setTimeout(() => {
        console.log(`Pilot: flight with ID ‘${payload.Details.flightID}’ has arrived
        `)
        payload.event = 'Arrived';
        payload.time = new Date()
        socket.emit('Arrived',payload)
    },7000)
}

function handleOnFightNotCatched(payload){
    Object.keys(payload.flights).forEach( id => {
        console.log(`Pilot:Sorry i didn't catch this flight ID ${payload.flights[id].Details.flightID}`)
        socket.emit('delete',id)
    })
}