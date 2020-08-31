const socket = io();

// New User Joins
socket.on('userJoined', (user) => {
    if (findUser(user.id) == null || findUser(user.id) == undefined) {
        if (user.new)
            alertify.success(user.name + ' has joined the room');
        addUser(user);
    }
    joinRoom(false);
});

// User Leaves
socket.on('userLeft', (user) => {
    alertify.error(findUser(user) + ' left the room');
    removeUser(user);
})

// Join Room
function joinRoom (isNew) {
    socket.emit('joinRoom', {room: room, user: user, new: isNew});
}