'use strict'

/*
programa que pida dos numeros y diga cual es el mayor, el menor y si son iguales
plus: si los numero no son numeros o son menores iguales a cero, nos vuelva a pedir los numeros
*/
var numero1 = parseInt(prompt("introduce el primer numero ",0))
var numero2 = parseInt(prompt("Introduce el segundo numero ",0))
console.log(numero1, numero2)
while(numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt("introduce el primer numero ",0))
	numero2 = parseInt(prompt("Introduce el segundo numero ",0))
}
if (numero1 == numero2) {
	alert("los numeros no son iguales")
}else if(numero1 > numero2){
	alert("El numero mayor es: " + numero1)
}else if(numero2 > numero1){
	alert("El numero mayor es: " + numero2)
}else{
	alert("Introduce numeros correctos")
}
