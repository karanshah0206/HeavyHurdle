const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3100;

app.use(express.static('HeavyHurdle-MA'));
app.use(express.static('HeavyHurdle-LS'));

server.listen(port, () => {
    console.log('Server on');
})