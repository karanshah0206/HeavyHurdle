const socket = io();

// New User Joins
socket.on('userJoined', (user) => {
    alertify.success(user.name + ' has joined the room');
    addUser(user);
});

// User Leaves
socket.on('userLeft', (user) => {
    alertify.error(findUser(user) + ' left the room');
    removeUser(user);
})

// Join Room
function joinRoom () {
    socket.emit('joinRoom', {room: room, user: user});
}