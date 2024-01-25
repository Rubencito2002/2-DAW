let cadena = prompt("Introduce una cadena de texto");

function esPalindromo(cadena)
{
    const cadenaSinEspacio = cadena.replace(/\s/g, '').toLowerCase();
    return cadenaSinEspacio === cadenaSinEspacio.split('').reverse().join('');
}

if (esPalindromo(cadena))
{
    alert('¡La cadena es un palindromo!');
}
else
{
    alert('¡La cadena no es un palindromo!');
}