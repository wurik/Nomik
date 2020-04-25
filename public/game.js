/*
Comprobamos si el usuario tiene un MD5 asociado a alguna cookie.
Sino,
Pedimos un nombre de usuario que asociamos a su MD5, el MD5 lo guardamos en una cookie.

1º Ver, crear o unirse a sala (Como expectador o como jugador)
Mínimo 3 jugadores, máximo 12.

2º Al inicio de la partida, el código se ejecuta en cada cliente.
El número random debe de generarse por el servidor (Deberíamos de darle 2 segundos entre que se generan, todos lo reciben y se continua con la ejecución del código)
Despues de 5 segundos
Pasamos al servidor los datos reportados por cada jugador. (Nombres, Puntos de cada jugador, a quien le toca en el siguiente turno, cuantos puntos hacen falta para ganar)
Deberíamos de escapar los nuevos datos que no sean strings o numeros; y hay que tener cuidado con las `` del textarea.
comparamos si hay diferencias, si las hay; tratamos de ver si existe una "verdad mayoritaria" (Más del 50%)
Si hay esa verdad, esos serán los datos que demos como validos y transmitamos al resto de jugadores.
Si no damos con una verdad mayoritaria, enviamos un mensaje a los usuarios de "Hack"
transmitimos los datos anteriores y volvemos al inicio del punto 2º.

3º Activamos la edición del texto tanto en cliente como en servidor del turno del usuario que ahora corresponde
y le asignamos 25 segundos para que proponga un cambio; todos deberían de poder ver en tiempo real lo que esta modificando.
El usuario si quiere puede pulsar un botón para pasar de turno sin proponer nada.
Tanto después de esos 25 segundos como pulsando el botón proponer; se muestra a todos los usuarios un Tic y una X;
Hay 10 segundos para elegir; los que no eligen en ese tiempo, automaticamente eligen X.
si la mayoría (Más del 50%) elige el Tic; guardamos automaticamente el código y pasamos al punto 2º.

4º Comprobación del ganador: Si todos eligen de forma mayoritaria un ganador; se considera que ese es el ganador.
Cuando damos con un ganador, el juego se termina.




En un periodo concreto (Ej 5 segundos) Cada usuario envia un resultado / numero al servidor.
Si este es igual en todos los casos, se aprueba el resultado




*/
