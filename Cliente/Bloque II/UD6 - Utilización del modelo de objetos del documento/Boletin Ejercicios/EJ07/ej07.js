const tabla = document.getElementsByTagName("table")[0];
tabla.addEventListener("click", subirFila);

function subirFila(event) {
    const celdaClickeada = event.target;
    const filaSeleccionada = celdaClickeada.parentElement;
    const filaAnterior = filaSeleccionada.previousElementSibling;

    if (filaAnterior != null) {
        //Si no tiene fila anterior porque es la primera
        filaSeleccionada.after(filaAnterior);
    }
}