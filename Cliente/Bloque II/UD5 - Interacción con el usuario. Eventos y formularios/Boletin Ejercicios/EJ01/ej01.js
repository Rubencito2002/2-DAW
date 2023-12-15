// Dado el formulario con los datos de tres actores seleccionables mediante un radiobutton, añadir un manejador de eventos al botón para que al pulsar sobre él muestre por consola los datos del actor seleccionado.
formulario.consultar.addEventListener("click", mostrarDatos) 
function mostrarDatos()
{
    for (let actor of formulario.actores) 
        {
            if (actor.checked) 
            {
                actorSeleccionado = radio.value;
                break;
            }
        }
}
        
