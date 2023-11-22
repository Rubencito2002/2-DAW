let tiempo = 0;
let intervalo;
let corriendo = false;

const cronometro = document.getElementById("cronometro");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

function actualizarCronometro() {
    tiempo++;
    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = tiempo % 60;
    document.getElementById("cronometro").innerHTML = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

function iniciarDetenerCronometro() 
{
    if(corriendo) 
    {
        clearInterval(intervalo);
        corriendo = false;
    } 
    else 
    {
        intervalo = setInterval(actualizarCronometro, 100);
        corriendo = true;
    }
}

function reiniciarCronometro() 
{
    clearInterval(intervalo);
    tiempo = 0;
    cronometro.innerHTML = "00:00:00";
    corriendo = false;
}

start.addEventListener("click", iniciarDetenerCronometro);
stop.addEventListener("click", iniciarDetenerCronometro);
reset.addEventListener("click", reiniciarCronometro);