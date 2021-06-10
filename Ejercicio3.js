'use strict'

var numero1 = parseInt(prompt("introduce un numero: ", 0))
var numero2 = parseInt(prompt("introduce otro numero: ", 0))
console.log(numero1, numero2)
document.write("<h1>De "+numero1+" a "+numero2+" estan estos numeros:</h1>")
for (var i = numero1; i <= numero2; i++) {
	document.write(i+"<br/>")
}