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
    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log('Connection ' + socket.id + ' joined room ' + room);
    });
});