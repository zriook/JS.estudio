'use strict'

/*
muestre todos los numeros divisores de un numero introducidos en un pront
*/

var numero1 = parseInt(prompt("introduce un numero: ", 1))

for (var i = 1; i <= numero1; i++) {

	if (numero1%i ==0) {
		console.log("Divisor: "+ i)
	}
	
}