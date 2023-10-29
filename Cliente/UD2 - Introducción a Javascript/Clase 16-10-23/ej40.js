// Confeccionar una función que reciba dos números y muestre en la página los valores comprendidos entre ellos de uno en uno. Cargar por teclado esos dos valores.
function generarListado() 
{
    const num1 = Number(frmNumeros.num1.value);
    const num2 = Number(frmNumeros.num2.value);
    let salida = "Los números entre " + num1 + " y " + num2 + " son: ";
    for (let i = num1 + 1; i < num2; i++) 
    {
        salida += String(i) + " ";
    }
    document.getElementById("salida").innerHTML = salida;
}