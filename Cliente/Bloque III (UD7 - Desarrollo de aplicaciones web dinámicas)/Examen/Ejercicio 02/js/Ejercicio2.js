// Evento para cargar la página con los datos de firebase.
document.addEventListener("DOMContentLoaded", inicializar);

const urlBase = 'https://ejercicio02-43e0a-default-rtdb.europe-west1.firebasedatabase.app/';
const urlCategoria = 'https://ejercicio02-43e0a-default-rtdb.europe-west1.firebasedatabase.app/categorias.json';
const urlProductos = 'https://ejercicio02-43e0a-default-rtdb.europe-west1.firebasedatabase.app/productos.json';

const selectCategorias = document.getElementsByName('categorias')[0];
const selectProductos = document.getElementsByName('productos')[0];
selectCategorias.addEventListener('change', cargarProductos);
const panelSalida = document.getElementById('datosProducto');

function inicializar(){
    cargarCategorias();
    cargarProductos();
    mostrarDatosProductos();
}

function cargarCategorias(){
    fetch(urlCategoria)
        .then(response => response.json())
        .then(categorias => {
            selectCategorias.innerHTML = '';
            for(let clave in categorias){
                const categoria = categorias[clave];
                const opcion = document.createElement('option');
                opcion.value = clave;
                opcion.text = categoria;
                selectCategorias.append(opcion);
            }
        })
        .catch(error => console.error('Error al obtener los datos de categorias: ', error));
}
function cargarProductos(){
    fetch(urlProductos)
        .then((response) => response.json())
        .then((producto) => Object.values(producto))
        .then(actualizarProductos)
}

// Funcion para cargar los productos según la categoria seleccionada.
function actualizarProductos(productos){
    const categoriaSeleccionada = selectCategorias.selectedIndex;

    selectProductos.innerHTML = '';

    for(let clave in productos){
        const producto = productos[clave];
        if(producto.idCategoria == categoriaSeleccionada){
            const opcion = document.createElement('option');
            opcion.text = producto.nombreProducto;
            selectProductos.append(opcion);
        }
        
    }
}

function mostrarDatosProductos(){
    fetch(urlProductos)
        .then((response) => response.json())
        .then((producto) => {
            const indice = selectProductos.selectedIndex;
            if(indice >= 0){
                mostrarProductos(producto, indice);
            } else {
                selectProductos.selectedIndex = 0;
                mostrarProductos(producto, indice);
            }
        })
}

function mostrarProductos(productos, indice){
    eliminarProducto();

    const claveProducto = Object.keys(productos)[indice];
    const productoMostrar = productos[claveProducto];

    for(let prod in productoMostrar){
        const idProducto = productoMostrar[prod].idProducto;
        const precioUnidad = productoMostrar[prod].precioUnidad;
        const parrafoID = document.createElement('p');
        parrafoID.textContent = 'IDProducto: ' + idProducto;
        const parrafoPrecioUnidad = document.createElement('p');
        parrafoPrecioUnidad.textContent = 'Precio Unitario: ' + precioUnidad;
        const cuadrado = document.createElement('div');
        cuadrado.append(parrafoID);
        cuadrado.append(parrafoPrecioUnidad);
        panelSalida.appendChild(cuadrado);
    }
}

// Funcion para borrar los datos del anterior producto.
function eliminarProducto(){
    let productos = document.getElementById('datosProductos');
    for(let producto of productos){
        panelSalida.removeChild(producto);
    }
}