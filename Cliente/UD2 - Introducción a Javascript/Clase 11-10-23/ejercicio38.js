//Realizar un programa que al introducir un número por teclado nos diga si es primo o no.
function compruebaPrimo()
{
    const numero = Number(frmNumero.numero.value);
    document.getElementById("salida").innerHTML = esPrimo(numero) ? numero + " es primo" : numero + " no es primo";
}

function esPrimo(numero) 
{
    let limiteMaximo = Math.floor(Math.sqrt(numero)); 
    //Truncar la raiz cuadrada del número, es una propiedad matemática. Valdría comprobar hasta la mitad
    let primo = true;
    let i = 2;

    while (primo && i <= limiteMaximo) 
    {
        if(numero % i == 0) 
        {
            primo = false;
        } 
        else 
        {
            i++;
        }
    }
    return primo;
}