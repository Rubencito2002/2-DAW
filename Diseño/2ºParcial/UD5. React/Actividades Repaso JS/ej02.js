let cadena = prompt("Introduce una cadena de texto");

function esPalindromo(cadena)
{
    const cadenaSinEspacio = cadena.replace(/\s/g, '').toLowerCase();
    return cadenaSinEspacio === cadenaSinEspacio.split('').reverse().join('');
}

if (esPalindromo(cadena))
{
    console.log('¡La cadena es un palindromo!');
}
else
{
    console.log('¡La cadena no es un palindromo!');
}