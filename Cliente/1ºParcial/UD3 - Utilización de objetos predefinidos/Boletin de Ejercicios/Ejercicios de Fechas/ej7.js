// Realiza un programa que reciba una cadena con el siguiente formato: “nombre:apellidos:telefono:email:codigopostal”. Tras recibir la cadena, debe desglosar y mostrar la siguiente información:
//Código postal.
//Apellidos.
//Email.
//Suponiendo un formato de email “direccion@servidor” debe mostrar el nombre del servidor asociado.
function procesarCadena()
{
    const cadena = String (frmCambiar.frase.value);
    const partes = cadena.split(':');

    if (partes.length === 5)
    {
        const cp = partes[4];
        const apellidos = partes[1];
        const email = partes[3];
        const servidorEmail = obtenerServidorEmail(email);

        const res = 'Codigo postal: ' + cp + ' <br> Apellidos: ' + apellidos + " <br> Email; " + email + " <br> Servidor Email: " + servidorEmail;
    }
    else
    {
        res = 'El formato de la cadena es incorrecto.'
    }
}

function obtenerServidorEmail(email)
{
    const [usuario,dominio] = email.split('@');
    return dominio;
}