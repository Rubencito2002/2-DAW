// Partiendo de la plantilla facilitada en el ejercicio, implementar el código javascript que permite que la interacción del usuario y el documento sea como se describe a continuación:
// ○ Cuando el usuario haga click sobre alguno de los quince alumnos, éste debe moverse a la posición correspondiente de la lista que se haya indicado en el segundo recuadro azul.
// ○ Cuando el usuario presione el botón “Crear Tablas”, se crearán tres tablas dentro del tercer recuadro azul con el contenido que tengan en ese momento las listas del primer recuadro.
// ○ Cuando el usuario presione el botón “Borrar Tablas” se borrarán las tablas del tercer recuadro azul si las hubiera.

document.getElementById("btnCrearTablas").addEventListener("click", crearTablas);
document.getElementById("btnBorrarTablas").addEventListener("click", borrarTablas);
const alumnos = document.querySelectorAll("ul > li > ul > li");
for (let alumno of alumnos) {
    alumno.addEventListener("click", procesarAlumno);
}

function procesarAlumno(event) {
    const destino = document.querySelector("input:checked").value;
    const ubicacion = document.getElementById("combo").value;
    let listaDestino;

    if (destino == "aprob") {
        listaDestino = document.getElementById("aprobados");
    } else if (destino == "recup") {
        listaDestino = document.getElementById("recuperacion");
    } else if (destino == "repet") {
        listaDestino = document.getElementById("repetir");
    }

    if (ubicacion == "primero") {
        listaDestino.prepend(event.target);
    } else if (ubicacion == "ultimo") {
        listaDestino.append(event.target);
    }
}

function crearTablas() {
    // Primero borramos la capa de tablas
    borrarTablas();

    const listaAprobados = document.getElementById("aprobados").children;
    const listaRecuperacion = document.getElementById("recuperacion").children;
    const listaRepeticion = document.getElementById("repetir").children;
    const capaTablas = document.getElementById("tablas");

    capaTablas.append(generarTabla(listaAprobados));
    capaTablas.append(generarTabla(listaRecuperacion));
    capaTablas.append(generarTabla(listaRepeticion));
}

function generarTabla(lista) {
    const tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.style.marginBottom = "10px";
    for (let alumno of lista) {
        let fila = tabla.insertRow();
        fila.insertCell().append(document.createTextNode(alumno.textContent));
    }
    return tabla;
}

function borrarTablas() {
    document.getElementById("tablas").innerHTML = "";
}