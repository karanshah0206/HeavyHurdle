const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3100;

app.use(express.static('public'));

server.listen(port, () => {
    console.log('Server started');
});

io.on('connection', (socket) => {
    // Join Room
    socket.on('joinRoom', (memberDetails) => {
        socket.join(memberDetails.room);
        socket.to(memberDetails.room).emit('userJoined', ({id: socket.id, name: memberDetails.user, new: memberDetails.new}));
        console.log('Connection ' + socket.id + ' joined room ' + memberDetails.room);
    });

    // Chat Message
    socket.on('chatMessage', (data) => {
        socket.to(data.room).emit('chatMessage', {user: data.user, message: data.message});
    });

    // Raise Hand
    socket.on('raiseHand', (data) => {
        socket.to(data.room).emit('raiseHand', (data.user));
    });

    // Mute
    socket.on('muteToggle', (data) => {
        socket.to(data.room).emit('muteToggle', ({id: socket.id, isMute: data.isMute}));
    });

    // Blind
    socket.on('blindToggle', (data) => {
        socket.to(data.room).emit('blindToggle', ({id: socket.id, isBlind: data.isBlind}));
    });

    // Disconnect
    socket.on('disconnecting', () => {
        socket.to(Object.keys(socket.rooms)[1]).emit('userLeft', (socket.id));
        console.log('Connection ' + socket.id + ' left');
    });
});