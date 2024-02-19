document.getElementById("addJSON").addEventListener("click", procesarFichero);

function procesarFichero() {
  const url = formulario.url.value.trim();

  fetch(url)
    .then((response) => response.text())
    .then(mostrarObjetosConsola)
    .catch(console.log);
}

function mostrarObjetosConsola(texto) {
  let listaUsuarios = JSON.parse(texto).results;
  console.log(listaUsuarios);
}
