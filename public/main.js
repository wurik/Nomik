var socket = io.connect('http://localhost:8080', { 'forceNew': true });

socket.on('messages', function(data) {
  console.log(data);
  render(data);
});

socket.on('contador', function(data) {
//  console.log(data);
  renderNum(data);
});

socket.on('dorGigante', function(data) {
//  console.log(data);
  renderGigante(data);
});




function render (data) {
  var html = data.map(function(elem, index){
      return(`<div>
                <strong>${elem.author}</strong>:
                <em>${elem.text}</em>
              </div>`);
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}



function renderNum (data) {
  var num = data;

  document.getElementById('contador').innerHTML = num;
}

function renderGigante (data) {
  var numG = data;

  document.getElementById('gigante').innerHTML = numG;
}


function addMessage(e) {
  var texto = document.getElementById('texto');
  if (texto.value != null && texto.value != ""){ //Por si acaso alguien se pone a enviar valores en blanco o demasiado rápido
  var payload = {
    author: socketCookie[0].userName, //Tomamos el nombre de usuario de la cookie
    text: document.getElementById('texto').value
  };
  socket.emit('new-message', payload);
  }
texto.value = ''; //Reseteamos formulario
return false;
}
