document.getElementById("recuperarDatos").addEventListener("click", recuperarDatos);

function recuperarDatos() {
  const url = "https://api-ejercicios-default-rtdb.europe-west1.firebasedatabase.app/alumnos.json";
  fetch(url)
    .then((res) => res.json())
    .then((objRespuesta) => Object.values(objRespuesta))
    .then(mostrarAlumnos);
}

function mostrarAlumnos(listaAlumnos) {
  const capaSalida = document.getElementById("salida");
  let salida = "";
  for (let alumno of listaAlumnos) {
    salida += JSON.stringify(alumno) + "<br>";
  }
  capaSalida.innerHTML = salida;
}
