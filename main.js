function suma (numero1, numero2)
{
var numero1 = numero1;
var numero2 = numero2;
var resultado =  numero1 + numero2;
return alert("La suma es: " +  resultado);
}

function resta (numero1, numero2)
{
var numero1 = numero1;
var numero2 = numero2;
var resultado =  numero1 - numero2;
return alert("La resta es: " +  resultado);
}

function multiplicacion (numero1, numero2)
{
var numero1 = numero1;
var numero2 = numero2;
var resultado =  numero1 * numero2;
return alert("La multiplicaciòn es: " +  resultado);
}

function division (numero1, numero2)
{
var numero1 = numero1;
var numero2 = numero2;
var resultado =  numero1 / numero2;
return alert("La division es: " +  resultado);
}

function mayor (numero1, numero2)
{
	var mayor = numero1;
 var numero2 = numero2;

	if (mayor>numero2){
		alert("El número mayor es: " + mayor)
	}

 else{
	alert("El número mayor es: " + numero2)
 }
}

function menor (numero1, numero2)
{
var menor = numero1;
var numero2 = numero2;

	if (numero2<menor){
		alert("El número menor es: " + numero2)
	}

 else{
	alert("El número menor es: " + menor)
 }
}

do {

var opcion = prompt("Ingrese una operaciòn: suma, resta, multiplicacion; mayor o menor");

switch (opcion)
	{

	case "suma":
	case "+":
	var num1 = parseInt(prompt("Ingrese su primer nùmero"));
	var num2 = parseInt(prompt("Ingrese su segundo nùmero"));
	suma(num1 , num2);
	break;

	case "resta":
	case "-":
	var num1 = parseInt(prompt("Ingrese su primer nùmero"));
	var num2 = parseInt(prompt("Ingrese su segundo nùmero"));
	resta(num1 , num2);
	break;

	case "multiplicacion":
	case "*":
	var num1 = parseInt(prompt("Ingrese su primer nùmero"));
	var num2 = parseInt(prompt("Ingrese su segundo nùmero"));
	multiplicacion(num1 , num2);
	break;

	case "division":
	case "/":
	var num1 = parseInt(prompt("Ingrese su primer nùmero"));
	var num2 = parseInt(prompt("Ingrese su segundo nùmero"));
	division(num1 , num2);
	break;

	case "mayor":
	case ">":
	var num1 = parseInt(prompt("Ingrese su primer nùmero"));
	var num2 = parseInt(prompt("Ingrese su segundo nùmero"));
	mayor(num1 , num2);
	break;

	case "menor":
	case "<":
	var num1 = parseInt(prompt("Ingrese su primer nùmero"));
	var num2 = parseInt(prompt("Ingrese su segundo nùmero"));
	menor(num1 , num2);
	break;

	default:
	alert("Introduce suma, resta, multiplicacion, division, mayor o menor");
	}

	var repeticion = prompt("¿Quieres repetir?");
	} while(repeticion == "si");