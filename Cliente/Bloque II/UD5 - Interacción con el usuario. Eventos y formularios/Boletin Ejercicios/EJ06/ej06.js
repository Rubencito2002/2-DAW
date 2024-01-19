// Dado el documento HTML facilitado con este ejercicio, añadir los manejadores de eventos necesarios para:
// El cuadrado se ponga de color amarillo cuando el cursor del ratón se coloque encima del mismo, para ello usa el atributo classList añadiendo la clase amarillo preparada de antemano. Además deberá informar en la capa de salida de texto del tipo de evento, el objeto en el que se produce, así como las coordenadas del cursor en el momento que se desencadena. Cuando el cursor salga del cuadrado deberá volver todo a la situación original, cuadrado blanco y salida de texto vacía.
// Cuando el cursor se coloque en el input de texto, cada vez que se pulse una tecla se informará en la capa de salida de texto de la tecla pulsada.
let capa = document.getElementById("cuadrado");
let input = document.getElementById("txtEntrada");
capa.addEventListener("mouseenter", cursorDentro);
capa.addEventListener("mouseleave", cursorFuera);
input.addEventListener("keydown", teclaPulsada);

function cursorDentro(event) {
    document.getElementById("cuadrado").classList.add("amarillo");
    document.getElementById("salida").innerHTML = event.type + " en el " + event.currentTarget + "<br>Coordenadas: " + event.clientX + ":" + event.clientY;
}

function cursorFuera() {
    document.getElementById("cuadrado").classList.remove("amarillo");
    document.getElementById("salida").innerHTML = "";
}

function teclaPulsada(event) {
    document.getElementById("salida").innerHTML = "Tecla pulsada: " + event.key;
}