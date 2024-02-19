document.getElementById("boton").onclick = crearTabla;

function crearTabla() {
    const filas = formulario.filas.value;
    const columnas = formulario.columnas.value;
    let tabla = document.createElement("table");
    let contador = 1;
    for (let i = 0; i < filas; i++) {
        let fila = tabla.insertRow();
        for (let j = 0; j < columnas; j++) {
        let celda = fila.insertCell();
        let textoCelda = document.createTextNode(contador);
        celda.appendChild(textoCelda);
        contador++;
        }
    }
    document.getElementById("tabla").appendChild(tabla);
}