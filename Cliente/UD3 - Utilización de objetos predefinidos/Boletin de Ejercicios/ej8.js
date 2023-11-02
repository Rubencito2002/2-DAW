//Crear un script que muestre mediante un mensaje la fecha actual (día, mes en letra y año), la hora actual (hora y minutos), el día de la semana (en letra) o los tres anteriores a la vez, según elija el usuario.
function mostrarFecha() 
{
    const fecha = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    //alert('Fecha actual: ' + fecha.toLocaleDateString('es-ES', options));
    document.getElementById('res').innerHTML = 'Fecha actual: ' + fecha.toLocaleDateString('es-ES', options) + '<br>';
}

function mostrarHora() 
{
    const hora = new Date();
    //alert('Hora actual: ' + hora.getHours() + ':' + hora.getMinutes());
    document.getElementById('res').innerHTML = 'Hora Actual: ' + hora.getHours() + ':' + hora.getMinutes() + '<br>';
}

function mostrarDiaSemana() 
{
    const fecha = new Date();
    const options = { weekday: 'long' };
    //alert('Día de la semana: ' + fecha.toLocaleDateString('es-ES', options));
    document.getElementById('res').innerHTML = 'Día de la semana: ' + fecha.toLocaleDateString('es-ES', options) + '<br>';
}

function mostrarTodo() 
{
    mostrarFecha();
    mostrarHora();
    mostrarDiaSemana();
}