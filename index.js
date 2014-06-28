var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

// incluir sockets
var zmq = require('zmq');
var subscriber = zmq.socket('sub');
var fs = require('fs');
var mySocket = null;

// inicializar sockets
var io = require('socket.io').listen(app);
io.sockets.on('connection', function (socket) {
  mySocket = socket;
});

// inicializar el server
app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 		// loguear todo!
app.use(bodyParser()); 			// agarrar informacion en POST
app.use(methodOverride()); 	// capturar DEL y PUT
app.listen(8080);
console.log('Escuchando puerto 8080');
