formulario.txtEntrada.addEventListener("copy", mensajeNoCopiar);

function mensajeNoCopiar(event) {
    alert("No está permitido copiar este contenido");
    event.preventDefault();
}