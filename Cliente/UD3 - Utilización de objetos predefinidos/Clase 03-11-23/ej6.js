// Crear un script que convierte las palabras mayúsculas de una frase en minúsculas y viceversa.
function invertirMayusculasMinisculas() 
{
    const frase = String (frmCambiar.palabra.value);

    if (frase !== null)
    {
        const fraseEnCursiva = mayúsculasMinusculas(frase);
        document.getElementById("res").innerHTML = fraseEnCursiva;
    }
    else
    {
        document.getElementById("res").innerHTML = "No ingresaste una frase.";
    }
}

function mayúsculasMinusculas(frase)
{
    return frase.replace(/[a-zA-ZáéíóúüÁÉÍÓÚÜ]/g, match => match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase());
}