async function muestraMensaje() {
  let promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(document.getElementById("msjExito").value);
    }, 2000);
  });
  document.getElementById("salida").innerHTML = await promise;
}

document.getElementById("iniciaPromesa").onclick = muestraMensaje;
