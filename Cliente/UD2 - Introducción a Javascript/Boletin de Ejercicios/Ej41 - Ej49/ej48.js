// Preparar un documento HTML que contenga un formulario con dos entradas numéricas y cuatro botones, cada uno de ellos representará las cuatro operaciones aritméticas básicas, suma, resta, multiplicación y división. Al pulsar cualquiera de ellos se generará automáticamente la información de salida resultante de aplicar la operación elegida a las entradas numéricas proporcionadas por el usuario. Esta información debe ser mostrada en una capa de salida bajo el formulario.

function sumar()
{
    const num1 = Number (frmCalculadora.num1.value);
    const num2 = Number (frmCalculadora.num2.value);
    let salida = String(num1) + " + " + String(num2) + " = " + String(num1 + num2);
    document.getElementById("salida").innerHTML = salida;
}

function restar()
{
    const num1 = Number (frmCalculadora.num1.value);
    const num2 = Number (frmCalculadora.num2.value);
    let salida = String(num1) + " - " + String(num2) + " = " + String(num1 - num2);
    document.getElementById("salida").innerHTML = salida;
}

function multiplicar()
{
    const num1 = Number (frmCalculadora.num1.value);
    const num2 = Number (frmCalculadora.num2.value);
    let salida = String(num1) + " x " + String(num2) + " = " + String(num1 * num2);
    document.getElementById("salida").innerHTML = salida;
}

function dividir()
{
    const num1 = Number (frmCalculadora.num1.value);
    const num2 = Number (frmCalculadora.num2.value);
    let salida = String(num1) + " / " + String(num2) + " = " + String(num1 / num2);
    document.getElementById("salida").innerHTML = salida;
}