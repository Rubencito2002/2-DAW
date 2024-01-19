document.getElementById("formulario").addEventListener("click", manejador);
document.getElementById("capa").addEventListener("click", manejador);
document.getElementById("parrafo").addEventListener("click", manejador);

function manejador(event) {
    console.log("Manejador:\nthis: " + this.tagName + "\ncurrentTarget: " + event.currentTarget.tagName + "\nTarget: " + event.target.tagName);
}
