const apiRest = "https://api-ejercicios-default-rtdb.europe-west1.firebasedatabase.app/";
document.getElementById("recuperarDatos").addEventListener("click", recuperarDatos);
frmEliminarRegistro.addEventListener("submit", eliminarAlumno);

function recuperarDatos() {
  const fichero = "alumnos.json";
  fetch(apiRest + fichero)
    .then((res) => res.json())
    .then((data) => Object.values(data)) //Devuelve un objeto cuyos índice es el id generado por Firebase. Lo quitamos quedándonos con values
    .then(mostrarAlumnos)
    .catch(console.log);
}

function mostrarAlumnos(listaAlumnos) {
  const capaSalida = document.getElementById("salida");
  let tabla = document.createElement("table");
  let cabecera = document.createElement("thead");
  let fila, celda;
  cabecera.innerHTML = "<th>Id</th><th>Apellidos</th><th>Nombre</th><th>Edad</th>";
  tabla.append(cabecera);
  for (let alumno of listaAlumnos) {
    fila = tabla.insertRow();
    celda = fila.insertCell();
    celda.textContent = alumno.id;
    celda = fila.insertCell();
    celda.textContent = alumno.apellidos;
    celda = fila.insertCell();
    celda.textContent = alumno.nombre;
    celda = fila.insertCell();
    celda.textContent = alumno.edad;
  }
  borrarSalida();
  capaSalida.append(tabla);
}

function borrarSalida() {
  document.getElementById("salida").innerHTML = "";
}

function eliminarAlumno(event) {
  event.preventDefault();
  const fichero = "alumnos/";
  const idFirebase = frmEliminarRegistro.idFirebase.value.trim() + ".json";

  fetch(apiRest + fichero + idFirebase, {
    method: "DELETE",
  }).then((res) => res.json());

  setTimeout(recuperarDatos, 800);
}
