//Realizar un programa que acumule (sume) valores ingresados por teclado hasta ingresar el 9999 (no sumar dicho valor, solamente indica que ha finalizado la carga). Imprimir el valor acumulado e informar si dicho valor es cero, mayor a cero o menor a cero.
let acumulador;
let valor;
let salida = false;

do 
{
    valor = parseInt(prompt("Ingresa un valor:"));

    if (valor != 9999) 
    {
        acumulador += valor;
    }
    else
    {
        salida = true;
    }

} while(!salida)

document.getElementById("salida").innerHTML = "El valor acumulado es: " + acumulador;

if (acumulador === 0) 
{
    document.getElementById("salida").innerHTML = "El valor "+ acumulador + " acumulado es igual a cero.";
} 
else if (acumulador > 0) 
{
    document.getElementById("salida").innerHTML = "El valor "+ acumulador + " acumulado es mayor a cero.";
} 
else 
{
    document.getElementById("salida").innerHTML = "El valor "+ acumulador + " acumulado es menor a cero.";
}