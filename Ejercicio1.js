'use strict'
/*
programa que pida dos numeros y diga cual es el mayor, el menor y si son iguales
*/
var numero1 = parseInt(prompt("introduce el primer numero ",0))
var numero2 = parseInt(prompt("Introduce el segundo numero ",0))
console.log(numero1, numero2)
if (numero1 == numero2) {
	alert("los numeros no son iguales")
}else if(numero1 > numero2){
	alert("El numero mayor es: " + numero1)
}else if(numero2 > numero1){
	alert("El numero mayor es: " + numero2)
}
