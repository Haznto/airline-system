require('dotenv').config()
let port = process.env.PORT || 3000;
let host = `http://localhost:${port}`
const io = require('socket.io-client')
const socket = io.connect(host)

socket.emit('start' , () => {
    
})