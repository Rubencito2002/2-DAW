//Realiza un programa que pasados 20 segundos, nos muestre una sola vez la fecha actual del sistema.
setTimeout(function() 
{
    var fechaActual = new Date();
    //console.log("La fecha actual es: " + fechaActual);
    document.getElementById("res").innerHTML = "La fecha actual es: " + fechaActual;
}, 20000);
