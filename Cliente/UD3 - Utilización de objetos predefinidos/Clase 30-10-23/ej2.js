//Crear un programa que solicite al usuario una propuesta de contraseña y compruebe si cumple con los siguientes requisitos:
//Tiene entre 8 y 16 caracteres.
//Tiene, al menos, una letra mayúscula.
//Tiene, al menos, una letra minúscula.
//Tiene, al menos, un dígito.
//Tiene, al menos, uno de los siguientes caracteres especiales: guión alto, guión bajo, arroba, almohadilla, dólar, tanto por ciento o ampersand.

function validarContrasena() 
{
    // Solicitar una contraseña al usuario
    const contrasena = frmPassw.password.value;

    // Requisito 1: Longitud entre 8 y 16 caracteres
    if (contrasena.length < 8 || contrasena.length > 16) 
    {
        return false;
    }

    // Requisito 2: Al menos una letra mayúscula
    if (!/[A-Z]/.test(contrasena)) 
    {
        return false;
    }

    // Requisito 3: Al menos una letra minúscula
    if (!/[a-z]/.test(contrasena)) 
    {
        return false;
    }

    // Requisito 4: Al menos un dígito
    if (!/\d/.test(contrasena)) 
    {
        return false;
    }

    // Requisito 5: Al menos un carácter especial
    if (!/[-_@#$%&]/.test(contrasena)) 
    {
        return false;
    }

    return true;
}