document.getElementById("addJSON").addEventListener("click", atacarAPIRest);

function atacarAPIRest() {
  fetch("https://picsum.photos/list")
    .then((response) => response.json())
    .then(generarLista)
    .catch(console.log);
}

function generarLista(imagenes) {
  let lista = "<ul>";
  for (let imagen of imagenes) {
    lista += `<li> <a target="_blank" href="${imagen.post_url}">IMAGEN</a> ${imagen.author}</li>`;
  }
  lista += "</ul>";
  document.getElementById("salida").innerHTML = lista;
}
