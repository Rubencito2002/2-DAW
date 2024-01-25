var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeroDNI = prompt("Introduce el número de DNI");
var letraUsuario = prompt("Introduce la letra del DNI").toUpperCase(); 

if (numeroDNI < 0 || numeroDNI > 99999999) 
{
    console.log("El número proporcionado no es válido.");
} 
else 
{
    var resto = numeroDNI % 23;
    var letraCalculada = letras[resto];

    if (letraCalculada !== letraUsuario) 
    {
        
        console.log("La letra indicada no es correcta.");
    } 
    else 
    {
        console.log("El número y la letra de DNI son correctos.");
    }
}
