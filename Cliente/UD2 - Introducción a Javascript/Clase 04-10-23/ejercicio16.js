// 16. Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo.
/* Declaración de Variables. */
let numero = prompt("Introduce un nº:");
let numeroEntero = parseInt(numero);
let positivo = 'El número es positivo';
let negativo = 'El número es negativo';
let cero = 'El número es igual a cero';
let message;

/*
if(numeroEntero > 0)
    alert("El número es positivo.");
else if (numeroEntero === 0)
    alert("El número es igual a cero.");
else
    alert("El número es negativo.");
*/

message = numeroEntero > 0 ? positivo : numeroEntero === 0 ? cero : negativo;

alert(message);