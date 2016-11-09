
// Crear Cookie
var makeCookie = function (key, value) {
    expires = new Date();
    expires.setTime(expires.getTime() + 31536000000); // Estableces el tiempo de expiración, genius
    cookie = key + "=" + value + ";expires=" + expires.toUTCString();
    return document.cookie = cookie;
};

// Leer Cookie
var readCookie = function (key) {
    keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
    if (keyValue) {
        return keyValue[2];
    } else {
        return null;
    }
};

//Eliminar Cookie
function deleteCookie () {
  document.cookie = "MD5=; max-age=0";
  console.log("Cookie eliminada!");
}


var sendAuthCookie = function(){
  var secretNum = Random(10000000000000000000000000000000000000, 1000000000000000000000000000000000000);
  var secretMD5 = md5(secretNum);
  makeCookie("MD5", secretMD5);
  var userName = prompt("And you are... ?");
  makeCookie("userName", userName);
};


if (readCookie("MD5") === null){
  sendAuthCookie();
}



var socketCookie = [
  {MD5:"123w4567d89", userName:"PepeFlores"},
  {MD5:readCookie("MD5"), userName:readCookie("userName")}
];

socket.emit('TomaCookie', TomaCookie);
