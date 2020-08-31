const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3100;

app.use(express.static('public'));

server.listen(port, () => {
    console.log('Server started.');
});

io.on('connection', (socket) => {
    console.log('New connection: ' + socket.id);

    // Join Room
    socket.on('joinRoom', (memberDetails) => {
        socket.join(memberDetails.room);
        if (socket.adapter.rooms[memberDetails.room].length > 1) {
            socket.to(memberDetails.room).emit('userJoined', ({id: socket.id, name: memberDetails.user, new: memberDetails.new}));
        }
        console.log('Connection ' + socket.id + ' joined room ' + memberDetails.room);
    });

    // Disconnect
    socket.on('disconnecting', () => {
        socket.to(Object.keys(socket.rooms)[1]).emit('userLeft', (socket.id));
    });
});