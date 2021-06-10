'use strict'





var edad = 70;
var imprimir = "";

switch(edad){  

    case 18:
	  imprimir = "ya sos legal"
	break;

	case 25:
	  imprimir =  "ya eres un adulto"
	break;

	case 48:
	  imprimir = "crisis de los 40"
	break;

	case 70:
	  imprimir = "sos un jubilado"
	break;

	default:
		imprimir = "tu edad es neutral"
	break;
}
console.log(imprimir);

