// Crear un script que ponga en negrita las letras mayúsculas que hay en una frase.


function ponerNegrita()
{
    const fraseUsuario = String (frmCambiar.palabra.value);

    if (fraseUsuario !== null) 
    {
        // Aplicar la función a la frase
        const fraseConNegritas = ponerEnNegritaLetrasMayusculas(fraseUsuario);
        
        // Mostrar la frase con letras mayúsculas en negrita
        document.getElementById("res").innerHTML = fraseConNegritas;
    } 
    else 
    {
        document.getElementById("res").innerHTML = "No ingresaste una frase.";
    }
}

// Crear una función para envolver las letras mayúsculas en etiquetas <strong>
function ponerEnNegritaLetrasMayusculas(frase) 
{
    return frase.replace(/[A-Z]/g, letra => `<strong>${letra}</strong>`);
}