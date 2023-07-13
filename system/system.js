'use strict'
require(`dotenv`).config()
let port = process.env.PORT || 3000;
const io = require('socket.io')(port);
const { v4: uuidv4 } = require('uuid');

let queue = {
    flights: {}
}

io.on(`connection`, socket => {
console.log('Your connected to the Server, you id:', socket.id);
socket.on('IamManager', payload => {
    io.emit('new-flight')
})

socket.on('new-flight-scheduled', handleNewFly)
socket.on('Arrived', handleArrivedFly)
socket.on('get-all', payload => {
    socket.emit('flight',queue)
    // console.log(queue)
    // queue = {
    //     flights: {}                  // to empty the queue all at once
    // }
    socket.on('delete', payload => {
        delete queue.flights[payload]   // to empty the queue on mulitple flight deletion based on the pilot request
        // console.log(queue)              // end result : at the end both queue will be empty.
    })
    
})

socket.on('disconnect', payload => {
    queue = {
        flights: {}
    }
})
})

const airline = io.of('/airline');
airline.on('connection', socket => {
    socket.on('took-off', handletookoffFly)
})


function handleNewFly(payload){
    const id = uuidv4()
    queue.flights[id] = payload;
    io.emit('new-flight-scheduled' ,payload)
    console.log('Flight',payload)
}
function handleArrivedFly(payload){
    io.emit('flight-arrival', payload)
    delete queue.flights[payload.id] //
    console.log('Flight',payload)
}
function handletookoffFly(payload){
    console.log('Flight',payload)
}

//////

// function handleGetAll(payload) {
//     io.emit('flight',queue)
//     console.log(queue)
//     queue = {
//         flights: {}
//     }
//     socket.on('delete', payload => {
//         delete queue.flights[payload.id]
//     })
// }


