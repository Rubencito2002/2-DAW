const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  let datos = new FormData(formulario);

  fetch("seleccionar.php", {
    method: "POST",
    body: datos,
  })
    .then((res) => res.json())
    .then(imprimirResultados);
});

function imprimirResultados(listaAlumnos) {
  let cadenaSalida = "<ul>";
  for (let alumno of listaAlumnos) {
    cadenaSalida += "<li>" + alumno.nombre + " " + alumno.apellidos + " (" + alumno.edad + ")</li>";
  }
  respuesta.innerHTML = cadenaSalida + "</ul>";
}
