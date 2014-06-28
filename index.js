var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();
var http           = require('http');
var miServer       = http.createServer(app).listen(8080);

// incluir sockets
console.log('cargando sockets...');
var zmq = require('zmq');
var socketDesdePupil = zmq.socket('sub');
var fs = require('fs');
var socketHaciaBrowser = null;

// inicializar sockets
console.log('inicializando socket.io...');
var io = require('socket.io')(miServer);
io.sockets.on('connection', function (socket) {
  socketHaciaBrowser = socket;
});

// inicializar zeroMQ
socketDesdePupil.on('message', function(reply) {

  var msg = reply.toString();
  console.log('Msg recibido de pupil:', msg);

  if (msg.length > 10) {
    var regex = /\(([0-9\.]+), ([0-9\.]+)\)/;
    var result = msg.match(regex);

    if (result) {
      var x = result[1];
      var y = result[2];
      if (mySocket) {
        mySocket.emit('gaze', { x: x, y: y });
      }
    }
  }
});

console.log('inicializando ZeroMQ...');
socketDesdePupil.connect('tcp://127.0.0.1:5000');
socketDesdePupil.subscribe('');

// inicializar el server
console.log('inicializando servidor Express...');
app.use(express.static(__dirname + '/public/www')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 		// loguear todo!
app.use(bodyParser()); 			// agarrar informacion en POST
app.use(methodOverride()); 	// capturar DEL y PUT
app.listen(8080);
console.log(' -> escuchando puerto 8080');

process.on('SIGINT', function() {
  subscriber.close();
});
