'use strict'

//mostrar todos los numeros impares que hay entre 2 numeros introducidos por el usuario

var numero1 = parseInt(prompt("introduce un numero: ", 0))
var numero2 = parseInt(prompt("introduce otro numero: ", 0))
console.log(numero1, numero2)

while(numero1 < numero2){
	numero1++

	if (numero1%2 != 0) {
		console.log("El "+ numero1+" es impar")
	}
}