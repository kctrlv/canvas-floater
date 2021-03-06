const http    = require('http');
const express = require('express');
const app     = express();

app.use(express.static('public'));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/public/index.html');
});

var server = http.createServer(app);
const socketIo = require('socket.io');
const io = socketIo(server);

var port = process.env.PORT || 2115;

var server = http.createServer(app);

server.listen(port, function() {
  console.log("Listening on port " + port + ".")
})

module.exports = server;
