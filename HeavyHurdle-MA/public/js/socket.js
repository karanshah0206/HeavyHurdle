const socket = io();

// New User Joins
socket.on('userJoined', (user) => {
    alertify.message(user + ' has joined the room');
});

// Join Room
function joinRoom () {
    socket.emit('joinRoom', {room: room, user: user});
}