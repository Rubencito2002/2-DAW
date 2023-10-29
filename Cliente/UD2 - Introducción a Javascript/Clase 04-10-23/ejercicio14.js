//14. Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, ó 3 cifras. Mostrar un mensaje de error si el número de cifras no es 1, 2 ó 3.

let numero = prompt("Introduce un nº:");
let numeroEntero = parseInt(numero);

if(numeroEntero >= 1 && numeroEntero <= 9)
    alert("El número tiene una cifra.");
else if (numeroEntero >= 10 && numeroEntero <= 99)
    alert("El número tiene dos cifra.");
else if (numeroEntero >= 100 && numeroEntero <= 999)
    alert("El número tiene tres cifra.");
else
    alert("El numero no tiene 1, 2 ni 3 cifras.")