// Espera a que el DOM esté completamente cargado antes de ejecutar la función cargarDatos
document.addEventListener('DOMContentLoaded', cargarDatos);

// Función principal para cargar datos y mostrar la tabla
function cargarDatos() {
    // Realiza una solicitud AJAX para obtener los datos del archivo 'coches.json'
    fetch('coches.json')
        .then(response => {
            // Verifica si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Error al cargar los datos.');
            } else {
                // Convierte la respuesta a formato JSON y devuelve una nueva promesa
                return response.json();
            }
        })
        .then(data => {
            // Imprime los datos en la consola para propósitos de depuración
            console.log(data);
            // Llama a la función para mostrar los datos en la tabla
            mostrarDatosEnTabla(data.coches);
        })
        .catch(error => {
            // Captura y maneja cualquier error que pueda ocurrir durante la solicitud
            console.error(error);
        });
}

// Función para mostrar los datos en una tabla
function mostrarDatosEnTabla(coches) {
    // Crea elementos HTML para la tabla y su cuerpo
    const tabla = document.createElement('table');
    const cuerpo = document.createElement('tbody');

    // Itera sobre la lista de coches
    coches.forEach(function (coche) {
        // Crea una fila para cada coche y asigna los valores de las propiedades a las celdas
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${coche.marca}</td>
            <td>${coche.modelo}</td>
            <td>${coche.matricula}</td>
            <td>${coche.kilometros}</td>
        `;
        // Agrega la fila al cuerpo de la tabla
        cuerpo.appendChild(fila);
    });

    // Agrega el cuerpo de la tabla a la tabla
    tabla.appendChild(cuerpo);
    // Agrega la tabla al elemento con id 'salida' en el HTML
    document.getElementById('salida').appendChild(tabla);
}
