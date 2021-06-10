'use strict'
/*
Tenemos que hacer si un numero es par o impar
1 ventana pront
2 si no es valido que nos pida de nuevo el numero
3 mostrar si es par o impar
*/

var numero = parseInt(prompt("introduce un numero", 0))

while(isNaN(numero)){
	numero = parseInt(prompt("introduce un numero", 0))
}
if (numero%2 == 0) {
	alert("Es un numero par")
}else{
	alert("Es un numero impar")
}