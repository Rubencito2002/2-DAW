// Crear un script que ponga en cursiva las letras minúsculas que hay en una frase.

function ponerCursiva()
{
    const frase = String (frmCambiar.palabra.value);

    if (frase !== null)
    {
        const fraseEnCursiva = ponerCursivaLetra(frase);
        document.getElementById("res").innerHTML = fraseEnCursiva;
    }
    else
    {
        document.getElementById("res").innerHTML = "No ingresaste una frase.";
    }
}

function ponerCursivaLetra(frase)
{
    return frase.replace(/[a-záéíóúü]/g, match => `<span class="italicize">${match}</span>`);
}