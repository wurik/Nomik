function Random(min, max)
{
    var numero = Math.floor( Math.random() * (max - min + 1) + min );
    return numero;
}


// Nos comprueba si existe el MD5 en el array, y si existe nos dice donde.
function validateMD5(arr, md5) {
    for(var i=0; i<arr.length; i++) {
        if (arr[i].MD5 == md5) return i;
    }
}
