document.getElementById("boton").addEventListener("click", crearTablero);

function crearTablero() {
    const filas = 8;
    const columnas = 8;
    let celdaNegra = false;
    let tabla = document.createElement("table");
    let idFila = 8;
    for (let i = 0; i < filas; i++) {
        let fila = tabla.insertRow();
        let idColumna = 65; //charCode de la A
        for (let j = 0; j < columnas; j++) {
        let celda = fila.insertCell();
        let textoCelda = document.createTextNode(String.fromCharCode(idColumna) + idFila);
        celda.appendChild(textoCelda);
        idColumna += 1;
        if (celdaNegra) {
            celda.style.backgroundColor = "black";
            celda.style.color = "white";
        }
        celdaNegra = !celdaNegra;
        }
        idFila -= 1;
        celdaNegra = !celdaNegra; // Para que salgan celdas alternas en la siguiente fila
    }
    document.getElementById("tablero").appendChild(tabla);
}
