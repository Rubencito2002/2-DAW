document.body.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    document.getElementById("salida").innerHTML = "Pulsado el botón derecho del ratón";
});

document.body.addEventListener(
    "click",
    () => (document.getElementById("salida").innerHTML = "Pulsado el botón izquierdo del ratón")
);