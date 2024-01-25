let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numeroDNI = prompt("Introduce el número de DNI");
let letraUsuario = prompt("Introduce la letra del DNI").toUpperCase(); 

if (numeroDNI < 0 || numeroDNI > 99999999) 
{
    alert("El número proporcionado no es válido.");
} 
else 
{
    let resto = numeroDNI % 23;
    let letraCalculada = letras[resto];

    if (letraCalculada !== letraUsuario) 
    {
        
        alert("La letra indicada no es correcta.");
    } 
    else 
    {
        alert("El número y la letra de DNI son correctos.");
    }
}
