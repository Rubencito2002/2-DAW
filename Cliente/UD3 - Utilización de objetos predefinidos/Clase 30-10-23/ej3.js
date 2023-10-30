// Crear un script que muestre el número de palabras que contiene una frase introducida por el usuario.
function contadorPalabra()
{
    const fraseUsuario = String (frmFrase.frase.value);
    const res = "";
    // Verificar si el usuario ingresó una frase
    if (fraseUsuario !== null) 
    {
        // Dividir la frase en palabras usando un espacio en blanco como separador
        const palabras = fraseUsuario.split(" ");

        // Filtrar las palabras vacías (puede haber espacios múltiples entre palabras)
        const palabrasFiltradas = palabras.filter(palabra => palabra.trim() !== "");
        
        // Contar el número de palabras
        const numeroPalabras = palabrasFiltradas.length;
        res += `La frase que ingresaste tiene ${numeroPalabras} palabras.`;
    }
    else
    {
        res+= "No ingresaste una frase.";
    }

    document.getElementById("res").innerHTML = res;
}