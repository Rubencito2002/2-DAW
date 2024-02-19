const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  let datos = new FormData(formulario);

  fetch("grabar.php", {
    method: "POST",
    body: datos,
  })
    .then((res) => res.json())
    .then(console.log)
    .then((datos) => {
      if (datos === "error") {
        respuesta.innerHTML = `<b>Rellena todos los campos</b>`;
      } else {
        respuesta.innerHTML = `<b>${datos}</b>`;
      }
    });
  /*.catch(function (err) {
      console.log(err);
    });*/
});
