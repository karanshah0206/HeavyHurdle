const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3100;

app.use(express.static('public'));

server.listen(port, () => {
    console.log('Server started.');
});