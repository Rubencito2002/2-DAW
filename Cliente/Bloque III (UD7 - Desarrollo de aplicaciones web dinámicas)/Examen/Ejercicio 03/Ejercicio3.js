// Evento para cargar la página con los datos de firebase.
document.addEventListener("DOMContentLoaded", procesarFichero);

function procesarFichero(){
    fetch('partidos.json')
        .then((response) => response.json())
        .then((partidos) => Object.values(partidos))
        .then(mostrarPartidos)
}

function mostrarPartidos(partidos){
    const capaSalida = document.getElementById('salida');
    // Creamos los elementos HTML para la tabla y el cuerpo.
    const tabla = document.createElement('table');
    const cuerpo = document.createElement('tbody');

    partidos.forEach(function (partido) {
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${partido.equipoLocal}</td>
            <td>${partido.equipoVisitante}</td>
            <td>${partido.golesLocal}</td>
            <td>${partido.golesVisitante}</td>
        `;
        cuerpo.appendChild(fila);
    });

    tabla.appendChild(cuerpo);
    capaSalida.appendChild('Resultados de Partidos' + tabla);
}