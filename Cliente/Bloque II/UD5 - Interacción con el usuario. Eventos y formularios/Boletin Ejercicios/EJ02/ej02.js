// Dado el formulario con los datos de cuatro provincias gallegas seleccionables mediante un select, añadir un manejador de eventos al botón para que al pulsar sobre él muestre por consola los datos de la provincia seleccionada.
formulario.boton.addEventListener("click", mostrarDatos)
function mostrarDatos()
{
    let texto = formulario.provincias.options[formulario.provincias.selectedIndex].text;
    let value = formulario.provincias.options[formulario.provincias.selectedIndex].value;
    console.log("Provincia: " + texto + "- Valor: " + value);
}