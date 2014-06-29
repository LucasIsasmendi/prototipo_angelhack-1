var zmq = require('zmq');
var socketDesdePupil = zmq.socket('sub');
var fs = require('fs');
var socketHaciaNavegador = null;
var express = require('express');
var app = express();
var http = require('http');

app.get('/hablar', function(req, res){
  res.json({test: "hola"});
});

console.log('configurando static');
app.use(express.static(__dirname + '/public'));

console.log('escuchando puerto 8080');
var miServer = http.createServer(app).listen(8080);

var io = require('socket.io').listen(miServer);

io.sockets.on('connection', function (socket) {
  socketHaciaNavegador = socket;
  /*
  socket.on('my other event', function (data) {
    console.log(data);
  });
  */
});

socketDesdePupil.on('message', function(reply) {
  var msg = reply.toString();
  if (msg.length > 10) {
    var regex = /\(([0-9\.]+), ([0-9\.]+)\)/;
    var result = msg.match(regex);

    if (result) {
      var x = result[1];
      var y = result[2];
      if (socketHaciaNavegador) {
        socketHaciaNavegador.emit('gaze', { x: x, y: y });
      }
    }
  }
});
socketDesdePupil.connect('tcp://127.0.0.1:5000');
socketDesdePupil.subscribe('');
process.on('SIGINT', function() {
  socketDesdePupil.close();
});
