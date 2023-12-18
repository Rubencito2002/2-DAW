// Lo mismo que el ejercicio 2 pero con un select multiple.
formulario.boton.addEventListener("click", mostrarDatos)
function mostrarDatos()
{
    for (let opcion of formulario.provincias.options)
    {
        if (opcion.selected)
        {
            console.log("Provincia: " + opcion.text + "- Valor: " + opcion.value);
        }
    }
}
