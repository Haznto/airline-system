'use strict'
require(`dotenv`).config()
let port = process.env.PORT || 3000;
const io = require('socket.io')(port);

io.on(`connection`, socket => {
console.log('Your connected to the Server, you id:', socket.id);

io.emit('new-flight')

socket.on('new-flight-scheduled', handleNewFly)
socket.on('Arrived', handleArrivedFly)
})

const airline = io.of('/airline');
airline.on('connection', socket => {
    socket.on('took-off', handletookoffFly)
})


function handleNewFly(payload){
    io.emit('new-flight-scheduled' ,payload)
    console.log('Flight',payload)
}
function handleArrivedFly(payload){
    io.emit('flight-arrival', payload)
    console.log('Flight',payload)
}
function handletookoffFly(payload){
    console.log('Flight',payload)
}

