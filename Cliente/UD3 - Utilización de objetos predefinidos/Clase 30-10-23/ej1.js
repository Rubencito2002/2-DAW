//Crear un programa que solicite al usuario nombre y apellidos y devuelva:
//El tamaño del nombre más los apellidos sin contar los espacios.
//La cadena completa en minúsculas y mayúsculas.
//La división del nombre, apellido1 y apellido2 en tres líneas distintas.
//Una propuesta de nombre usuario de la siguiente forma: inicial del nombre, primeras tres letras del apellido1 y primeras tres letras del apellido2. Ejemplo: Juan Martín López  → jmarlop
function mostrarNombre()
{
    const nombreCompleto = String (frmName.nombre.value);
    const nameParts = nombreCompleto.split(" ");
    const name = nameParts[0];
    const apellido1 = nameParts[1];
    const apellido2 = nameParts[2];

    // Tamaño del nombre más los apellidos sin contar los espacios
    const tamanioSinEspacios = nombreCompleto.replace(/ /g, "").length;

    // Cadena completa en minúsculas y mayúsculas
    const fullNameLower = nombreCompleto.toLowerCase();
    const fullNameUpper = nombreCompleto.toUpperCase();

    // Propuesta de nombre de usuario
    const nombreUsuario = name.charAt(0).toLowerCase() + apellido1.slice(0, 3).toLowerCase() + apellido2.slice(0, 3).toLowerCase();

    // Mostrar resultados
    const results = `
        Tamaño del nombre más los apellidos sin contar los espacios: ${tamanioSinEspacios}<br>
        Cadena completa en minúsculas: ${fullNameLower}<br>
        Cadena completa en mayúsculas: ${fullNameUpper}<br>
        División del nombre, apellido1 y apellido2 en tres líneas distintas:<br>
        Nombre: ${name}<br>
        Apellido1: ${apellido1}<br>
        Apellido2: ${apellido2}<br>
        Propuesta de nombre de usuario: ${nombreUsuario}`;
    document.getElementById("results").innerHTML = results;
}