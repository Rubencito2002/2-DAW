formulario.opciones.addEventListener("change", procesarFormulario);

function procesarFormulario() {
    const opcion = formulario.opciones.value;
    switch (opcion) {
        case "atributoStyle":
        asignarEstilosAtributoStyle();
        break;
        case "asignandoClases":
        asignarEstilosConClases();
        break;
        case "estilosPagina":
        asignarEstilosPagina();
        break;
        case "quitarEstilos":
        limpiarEstilosYClases();
        break;
        default:
        alert("Opción inválida");
    }
}

function limpiarEstilosYClases() {
    const texto = document.getElementById("texto");
    const enlaceEstilos = document.getElementById("estilo");
    enlaceEstilos.setAttribute("href", "");
    texto.style.color = "";
    texto.style.fontSize = "";
    texto.style.fontFamily = "";
    texto.classList.remove("claseEstilo");
}

function asignarEstilosAtributoStyle() {
    limpiarEstilosYClases();
    const texto = document.getElementById("texto");
    texto.style.color = "blue";
    texto.style.fontSize = "20px";
    texto.style.fontFamily = "Helvetica";
}

function asignarEstilosConClases() {
    limpiarEstilosYClases();
    const texto = document.getElementById("texto");
    texto.classList.add("claseEstilo");
}

function asignarEstilosPagina() {
    limpiarEstilosYClases();
    const enlaceEstilos = document.getElementById("estilo");
    enlaceEstilos.setAttribute("href", "ej08.css");
}