const tabla = document.getElementsByTagName("table")[0];
tabla.addEventListener("click", seleccionarFila);

function seleccionarFila(event) {
    const celdaClickeada = event.target;
    const filaSeleccionada = celdaClickeada.parentElement;

    borrarSeleccionadasAnteriores();
    filaSeleccionada.classList.add("seleccionada");
}

function borrarSeleccionadasAnteriores() {
    const filasMarcadas = tabla.getElementsByClassName("seleccionada");
    for (let fila of filasMarcadas) {
        fila.classList.remove("seleccionada");
    }
}