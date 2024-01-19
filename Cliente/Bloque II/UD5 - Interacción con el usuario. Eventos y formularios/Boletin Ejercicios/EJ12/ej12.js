formulario.addEventListener("submit", validarFormulario);

function validarFormulario(event) {
    if (formulario.txtTexto.value.length == 0) {
        //Se cancela el submit
        event.preventDefault();
        alert("Input vacío");
    }
}