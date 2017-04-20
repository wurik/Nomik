var dado, turno, goal;
var turnoDe = 0;
var gameOver = false;


var code = document.getElementById('code'); //Tomamos el textarea

var myCodeMirror = CodeMirror.fromTextArea(code, {lineNumbers: true}); //Transformamos el textarea a CodeMirror

function run() {
    if (!gameOver) {
    return eval(myCodeMirror.getValue()); // << did the trick ;) Ejecutamos el texto que contenga CodeMirror
  }
}

// document.body.addEventListener('keyup', function (e) {
//     socket.emit('nuevo-codigo', myCodeMirror.getValue());
// });


function enviar(){
  socket.emit('nuevo-codigo', myCodeMirror.getValue());
}


socket.on('actualizandoCodigo', function(data) {
  console.log(data);
  myCodeMirror.setValue(data);
});



//Para Servidor
//myCodeMirror.setValue();

// Usuarios


var jugador = [];

jugador[0] = {
  nombre: "Uriel",
  puntos: 0
};

jugador[1] = {
  nombre: "Six",
  puntos: 0
};

jugador[2] = {
  nombre: "Manu",
  puntos: 0
};

jugador[3] = {
  nombre: "elena",
  puntos: 0
};

jugador[4] = {
  nombre: "Marc",
  puntos: 0
};


// 1º Introducimos a los jugadores
// 2º Procesamos/ejecutamos codigo
//    2.1 Generamos un número aleatorio del 1 al 6.
//    2.2 Sumamos esa cantidad a los puntos del turno del usuario actual.
//    2.3 Si la cantidad es igual o superior a 100 puntos, anunciamos que dicho usuario a ganado.
//    2.4 Pasamos al siguiente turno
// 3º Permitimos modificar codigo
// 4º Si ha sido modificado, tiene que ser aprobado por mayoría
// 5º Se pasa al siguiente usuario.


function TirarDado(caras){
  dado = Math.floor(Math.random() * ((caras+1) - 1)) + 1;
  alert("Dado: " + dado);
}

function SumarDadoAJugador(dado,turnoDe){
  jugador[turnoDe].puntos = jugador[turnoDe].puntos + dado;
  alert(jugador[turnoDe].nombre + " tiene ahora " + jugador[turnoDe].puntos + " puntos.");
}

function SiguienteTurno(){
    numJugadores = jugador.length - 1;
    if (turnoDe >= numJugadores){
      turnoDe = 0;
    } else {
      turnoDe++;
    }
    alert("Turno de: " + jugador[turnoDe].nombre);
    turno++;
}

function ComprobarSiHaGanado(turnoDe,goal){
  if (jugador[turnoDe].puntos >= goal){
    alert(jugador[turnoDe].nombre + " WON THE GAME !!!");
    gameOver = true;
  }
}
