/*jshint esversion: 6 */

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var formatoDeMensajes = [{
  id: 1,
  text: "Buenos días",
  author: "Uriel"
}];

var actualizandoCodigo = `
goal = 100;
TirarDado(6);
SumarDadoAJugador(dado,turnoDe);
ComprobarSiHaGanado(turnoDe,goal);
SiguienteTurno();
`;

var contadorNum = 60;
var contadorGigante = 100000000000000;

setInterval(function() {
  contadorNum--;
},1000);

setInterval(function() {
  contadorGigante--;
},1);


app.use(express.static('public'));

app.get('/hello', function(req, res) {
  res.status(200).send("Hello World!");
});



// INICIAMOS CONEXIÓN CON SOCKETS

io.on('connection', function(socket) {
  console.log('Aquí hay un pitufo');

  setInterval(function() {
    socket.emit('dorGigante', contadorGigante);
  },1000);

  setInterval(function() {
    socket.emit('contador', contadorNum);
  },1000);


  socket.on('nuevo-codigo', function(data) { // RECIBIMOS UN new-message
      actualizandoCodigo = data; // GUARDAMOS LOS DATOS NUEVOS AL FORMATO DE MENSAJES

      io.sockets.emit('actualizandoCodigo', actualizandoCodigo); // Y LOS SUBIMOS (HAY QUE TENER EN CUENTA QUE SÓLO ESTAMOS ACTUALIZANDO UNA VARIABLE)
    });

  socket.on('TomaCookie', function(data) { // RECIBIMOS COOKIE
      Cookie = data;
      console.log(Cookie);
      io.sockets.emit('actualizandoCodigo', actualizandoCodigo);
    });

  socket.emit('messages', formatoDeMensajes);  // ENVIAMOS EL CONTENIDO DEL FORMATO DE MENSAJES

  socket.on('new-message', function(data) { // RECIBIMOS UN new-message
      formatoDeMensajes.push(data); // GUARDAMOS LOS DATOS NUEVOS AL FORMATO DE MENSAJES

      io.sockets.emit('messages', formatoDeMensajes); // Y LOS SUBIMOS (HAY QUE TENER EN CUENTA QUE SÓLO ESTAMOS ACTUALIZANDO UNA VARIABLE)
    });
});


// INICIAMOS SERVIDOR

server.listen(8080, function() {
  console.log("Servidor corriendo en http://localhost:8080");
});
