const socket = io();
const socketId = socket.io.engine.id;

// New User Joins
socket.on('userJoined', (user) => {
    if (findUser(user.id) == null || findUser(user.id) == undefined) {
        if (user.new)
            alertify.success(user.name + ' has joined the room');
        addUser(user);
        createVid(user);
    }
    if (user.new)
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

// Send Chat Message
function sendChat() {
    let message = document.getElementById('chatMessage').value;
    if (message.replace(/\s/g, '').length) {
        socket.emit('chatMessage', {room: room, user: user, message: message});
        addMessage({user: user, message: message});
    }
    document.getElementById('chatMessage').value = "";
    document.getElementById('chatSend').classList.add('btn-disabled');
}

// Incoming Chat Message
socket.on('chatMessage', (data) => {
    addMessage(data);
});

// User Raises Hand
function raiseHand() {
    socket.emit('raiseHand', {room: room, user: user});
}

// Raised Hand Recieved
socket.on('raiseHand', (user) => {
    if (admin)
        toastr.info(user + ' has raised their hand');
});