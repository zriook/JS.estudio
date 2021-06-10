'use strict'	
/*
bucle de suma y la media de los resultados hasta que el usuario ponga un numero negativo
*/
var suma = 0
var contador = 0 

do{
	var numero = parseInt(prompt("introduce un numero, hasta que metas un negativo", 0))
	if (isNaN(numero)) {
		numero = 0
	}else if(numero >= 0){
		suma = suma + numero
		//suma += numero
		contador++
	}
	console.log(suma)
	console.log(contador)
}while(numero >= 0)
alert("la suma de los numeros es: " + suma)
alert("la media de todos los numeros es: " + (suma/contador))
