document.getElementById("botonRestaurar").addEventListener("click", () => location.reload());

const cartas = document.querySelectorAll('img');
for(let carta of cartas){
    carta.addEventListener('click', procesarCarta);
}

function procesarCarta(event){
    const destino = document.querySelector('input:destinos').value;
    const ubicacion = document.getElementById('aplicarFuncion').value;

    let listaDestino;

    if(destino == 'Capa 1' && destino == 'Capa 2' && destino == 'Capa 3' && destino == 'Capa 4'){
        listaDestino = document.getElementById('destinos');
    }

    if(ubicacion == 'append'){
        listaDestino.append(event.target);
    } else if(ubicacion == 'prepend'){
        listaDestino.prepend(event.target);
    } else if(ubicacion == 'before'){
        listaDestino.before(event.target);
    } else if(ubicacion == 'after'){
        listaDestino.after(event.target);
    }
}