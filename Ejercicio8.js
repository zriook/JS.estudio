'use strict'
/*
CALCULADORA QUE PIDA 2 NUMEROS
si metemos uno mal que nos los vuelva a pedir
en el cuerpo de la pagina una alerta y por la consola el resultado de sumar/restar/multiplicar/dividir
*/

var numero1 = parseInt(prompt("introduce un numero: ", 1))
var numero2 = parseInt(prompt("introduce un numero: ", 1))

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt("introduce un numero: ", 1))
	numero2 = parseInt(prompt("introduce un numero: ", 1))
}	

var resultado = "la suma es: "+(numero1 + numero2)+" <br/>"+
				"la resta es: "+(numero1-numero2)+" <br/>"+
				"la divicion es: "+(numero1/numero2)+ "<br/>"+
				"la multiplicacion es: "+(numero1*numero2)+ "<br/>";

var resultadoCMD = "la suma es: "+(numero1 + numero2)+" \n"+
				"la resta es: "+(numero1-numero2)+" \n"+
				"la divicion es: "+(numero1/numero2)+ "<\n>"+
				"la multiplicacion es: "+(numero1*numero2)+ "\n";
document.write(resultado)

alert(resultadoCMD)
console.log(resultadoCMD)