document.getElementById("principal").addEventListener("click", tratarDiagonalPrincipal);
document.getElementById("secundaria").addEventListener("click", tratarDiagonalSecundaria);
document.getElementById("resetear").addEventListener("click", resetearEstilos);

function tratarDiagonalPrincipal() {
    const tabla = document.getElementsByTagName("table")[0];
    resetearEstilos();
    for (let i = 0; i < tabla.rows.length; i++) {
        tabla.rows[i].cells[i].style.backgroundColor = "blue";
    }
}

function tratarDiagonalSecundaria() {
    const tabla = document.getElementsByTagName("table")[0];
    resetearEstilos();
    for (let i = 0; i < tabla.rows.length; i++) {
        tabla.rows[i].cells[tabla.rows.length - i - 1].style.backgroundColor = "red";
    }
}

function resetearEstilos() {
    const tabla = document.body.children[1]; //Otra forma de encontrar la tabla en el documento
    for (let fila of tabla.rows) {
        for (let celda of fila.cells) {
        celda.style.backgroundColor = "";
        }
    }
}