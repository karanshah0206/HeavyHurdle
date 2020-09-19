const socket = io();
const socketId = socket.io.engine.id;

// New User Joins
socket.on('userJoined', (user) => {
    if (findUser(user.id) == null || findUser(user.id) == undefined) {
        if (user.new) {
            alertify.success(user.name + ' has joined the room');
            shareAgoraId(user.id);
        }
        addUser(user);
        createVid(user);
    }
    if (user.new)
        joinRoom(false);
    muteChecker();
    blindChecker();
});

// User Leaves
socket.on('userLeft', (user) => {
    alertify.error(findUser(user) + ' left the room');
    removeUser(user);
    removeVid(user);
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

// Mute
socket.on('muteToggle', (data) => {
    muteUI(data);
});
function toggleMute(isMute=true) {
    socket.emit('muteToggle', {room: room, isMute: isMute});
}

// Blind
socket.on('blindToggle', (data) => {
    blindUI(data);
});
function toggleBlind(isBlind=true) {
    socket.emit('blindToggle', {room: room, isBlind: isBlind});
}

// Agora
function shareAgoraId (to=room) {
    socket.emit('agoraId', {room: to, agoraId: agoraId});
}
socket.on('agoraId', (data) => {
    addAgoraVideo(data.id, data.agoraId);
    alert("Recieved: " + data.id + " " + data.agoraId);
});