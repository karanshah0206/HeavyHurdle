const socket = io();
function joinRoom () {
    socket.emit('joinRoom', room);
}