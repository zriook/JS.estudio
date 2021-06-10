'use strict'
/*
Tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt("¿De que numero queres que sea la tabla? ", 1))
document.write("<h1> La tabla es " + numero + "</h1>")

for (var i = 1; i <= 10; i++) {
	document.write(numero+" x "+i+" =  "+(numero*i)+"<br/>")
}

// todas las tablas de multiplicar 

for(var c = 1; c <= 10; c++){
	document.write("<h1> La tabla de " + c + "</h1>")
	for (var i = 1; i <= 10; i++) {
		document.write(c+" x "+i+" =  "+(i*c)+"<br/>")
	}


}