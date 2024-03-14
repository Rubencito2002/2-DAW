// Evento para cargar la página con los datos de firebase.
document.addEventListener("DOMContentLoaded", inicializar);

const urlBase = 'https://ejercicio01-b2960-default-rtdb.europe-west1.firebasedatabase.app/';
const urlLibros = 'https://ejercicio01-b2960-default-rtdb.europe-west1.firebasedatabase.app/libros.json';

let panel = document.getElementById('panel');

// Selectores de combos de los formulario de borrar y actualizar libros.
const selectLibrosBorrar = document.getElementsByName('libroBorrar')[0];
const selectLibrosActualizar = document.getElementsByName('libroModificar')[0];

function inicializar(){
    cargarLibros();
    cargarLibrosBorrar();
    cargarLibrosModificar();
}

// Funcion para cargar el combo del formulario para borrar el libro.
function cargarLibrosBorrar(){
    fetch(urlLibros)
        .then(response => response.json())
        .then(libros => {
            selectLibrosBorrar.innerHTML = '';
            for(let clave in libros){
                const libro = libros[clave];
                const opcion = document.createElement('option');
                opcion.value = clave;
                opcion.text = libro.titulo;
                selectLibrosBorrar.append(opcion);
            }
        })
        .catch(error => console.error('Error al obtener los datos de libros: ', error));
}

// Funcion para borrar el libro.
frmBorrarLibro.addEventListener('submit', borrarLibro)

function borrarLibro(event){
    const fichero = 'libros/';
    const nombreLibro = selectLibrosBorrar.values;
    const url = urlBase + fichero + nombreLibro + '.json';
    event.preventDefault();
    fetch(url, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then((libros) => {
        cargarLibrosBorrar();
        cargarLibrosModificar();
    })
    .catch((error) => console.error('Error al borrar el libro: ', error));
}

// Funcion para cargar el combo del formulario para actualizar el libro.
function cargarLibrosModificar(){
    fetch(urlLibros)
        .then(response => response.json())
        .then(libros => {
            selectLibrosActualizar.innerHTML = '';
            for(let clave in libros){
                const libro = libros[clave];
                const opcion = document.createElement('option');
                opcion.value = clave;
                opcion.text = libro.titulo;
                selectLibrosActualizar.append(opcion);
            }
        })
        .catch(error => console.error('Error al obtener los datos de libros: ', error));
}

function actualizarLibro(event){
    const fichero = 'libros/';
    const libroSeleccionado = selectLibrosActualizar.values;
    const url = urlBase + fichero + libroSeleccionado + '.json';
    const nombreLibro = document.getElementById('txtActualizarNombre');
    const nombreAutor = document.getElementById('txtActualizarAutor');
    const nombreEditorial = document.getElementById('txtActualizarEditorial');
    const numPaginas = document.getElementById('numActualizarPaginas');

    const nuevoLibro = {
        titulo: nombreLibro,
        autor: nombreAutor,
        editorial: nombreEditorial,
        paginas: numPaginas
    }
    event.preventDefault();
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(nuevoLibro),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then((libros) => {
        cargarLibrosBorrar();
        cargarLibrosModificar();
    })
    .catch((error) => console.error('Error al borrar el libro: ', error));
}

// Insercion de un nuevo libro.
frmAñadirLibro.addEventListener('submit', insertarLibro);

function insertarLibro(event){
    const fichero = 'libros/';
    const libroSeleccionado = selectLibrosActualizar.values;
    const url = urlBase + fichero + libroSeleccionado + '.json';
    const nombreLibro = document.getElementById('txtActualizarNombre');
    const nombreAutor = document.getElementById('txtActualizarAutor');
    const nombreEditorial = document.getElementById('txtActualizarEditorial');
    const numPaginas = document.getElementById('numActualizarPaginas');

    const nuevoLibro = {
        titulo: nombreLibro,
        autor: nombreAutor,
        editorial: nombreEditorial,
        paginas: numPaginas
    }

    event.preventDefault();
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(nuevoLibro),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then((libros) => {
        cargarLibrosBorrar();
        cargarLibrosModificar();
    })
    .catch((error) => console.error('Error al borrar el libro: ', error));
}

// Funcion para mostrar todos los libros.
function cargarLibros(){
    fetch(urlLibros)
        .then((response) => response.json())
        .then((data) => Object.values(data))
        .then(mostrarClientes)
}

function mostrarClientes(libros){
    for(let libro in libros){
        const nombreLibro = libros[libro];
        const cuadrado = document.createElement('div');
        cuadrado.textContent = nombreLibro;
        cuadrado.classList.add('cliente');
        cuadrado.classList.add('pagado');
        panel.appendChild(cuadrado);
    }
}