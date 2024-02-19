// Para poder realizar la carga inicial de la página con los datos necesarios siempre que se recargue la página.
document.addEventListener("DOMContentLoaded", inicializar);

function inicializar(){
    cargarComerciales();
    cargarClientes();
    cargarCategorias();
    cargarProductos();
    mostrarForm('categorias');
    cargarCategoriasActualizar();
    cargarCategoriasBorrar();
    cargarComercialesActualizar();
    cargarComercialesBorrar();
}

// Selector de comerciales con un evento de cambiar cuando se cambie el comercial poder cargar sus clientes.
let selectComercial = document.getElementsByName('comerciales')[0];
selectComercial.addEventListener('change', cargarClientes);
// Selector de categoria con un evento de cambiar cuando se cambie de categoria se cargue el selector de productos.
let selectCategoria = document.getElementsByName('categorias')[0];
selectCategoria.addEventListener('change', cargarProductos);
let selectProducto = document.getElementsByName('productos')[0];
// Declaracion del panel del cliente para mostrar los clientes del comercial actual.
let panelCliente = document.getElementById('clientes');
// Añadir manejador de eventos a varios componentes.
document.querySelector('#btnGestionCategorias').addEventListener('click', mostrarForm('categorias'));
document.querySelector('#btnGestionProductos').addEventListener('click', mostrarForm('productos'));
document.getElementById('btnGestionComerciales').addEventListener('click', mostrarForm('comerciales'));
document.getElementById('btnGestionClientes').addEventListener('click', mostrarForm('clientes'));
// Declaracion del selector de categoria del formulario de actualizar categoria.
let selectCategoriaActualizar = document.getElementsByName('categoriasActualizar')[0];
let selectCategoriaBorrar = document.getElementsByName('categoriasBorrar')[0];
// Declaracion del selector de categoria del formulario de actualizar categoria.
let selectComercialActualizar = document.getElementsByName('comercialesActualizar')[0];
let selectComercialBorrar = document.getElementsByName('comercialesBorrar')[0];


// URL de la base de datos para recoger los datos iniciales.
const urlBase = 'https://proyectocliente-9ebc8-default-rtdb.europe-west1.firebasedatabase.app/';
const urlComerciales = 'https://proyectocliente-9ebc8-default-rtdb.europe-west1.firebasedatabase.app/comerciales.json';
const urlCategorias = 'https://proyectocliente-9ebc8-default-rtdb.europe-west1.firebasedatabase.app/categorias.json';
const urlProductos = 'https://proyectocliente-9ebc8-default-rtdb.europe-west1.firebasedatabase.app/productos.json';
const urlClientes = 'https://proyectocliente-9ebc8-default-rtdb.europe-west1.firebasedatabase.app/clientes.json';

function cargarComerciales(){
    fetch(urlComerciales)
        .then(response => response.json())
        .then(comerciales => {
            // console.log('Datos obtenidos:', comerciales);
            selectComercial.innerHTML = '';
            for(let key in comerciales){
                if(comerciales.hasOwnProperty(key)){
                    const comercial = comerciales[key];
                    const opcion = document.createElement('option');
                    opcion.value = key;
                    opcion.text = comercial;
                    selectComercial.append(opcion);
                }
            }
        })
        .catch(error => console.error('Error al obtener los datos de comerciales: ', error));
}

function cargarCategorias(){
    fetch(urlCategorias)
        .then(response => response.json())
        .then(categorias => {
            // console.log('Datos obtenidos:', categorias);
            selectCategoria.innerHTML = '';
            for(let key in categorias){
                if(categorias.hasOwnProperty(key)){
                    const categoria = categorias[key];
                    const opcion = document.createElement('option');
                    opcion.value = key;
                    opcion.text = categoria;
                    selectCategoria.append(opcion);
                }
            }

            cargarProductos();
        })
        .catch(error => console.error('Error al obtener los datos de comerciales: ', error));
}

function cargarProductos(){
    // borrarProductos();
    const categoriaSeleccionada = selectCategoria.value;

    fetch(urlProductos)
        .then(response => response.json())
        .then(productos => {
            let i = 0;
            for(let key in productos){
                if(productos.hasOwnProperty(key) && productos[key].idCategoria === categoriaSeleccionada){
                    const producto = productos[key];
                    const opcion = document.createElement('option');
                    opcion.textContent = producto.nombreProducto;
                    opcion.value = producto.idProducto;
                    opcion.id = i;
                    selectProducto.append(opcion);
                }
            }
        })
        .catch(error => console.error('Error al obtener los datos de comerciales: ', error));
}

function cargarClientes(){
    // borrarClientes();
    // console.log('Cargando clientes para comercial:', selectComercial.value);
    let comercialId = selectComercial.value;

    fetch(urlClientes)
        .then(response => response.json())
        .then(clientes => {
            // console.log('Datos de clientes obtenidos:', clientes);
            let i = 0;
            for(let key in clientes){
                if(clientes.hasOwnProperty(key) && clientes[key].comercialId === comercialId){
                    console.log('Cliente encontrado:', clientes[key]);
                    let cliente = clientes[key];
                    let cuadrado = document.createElement('div');
                    cuadrado.append(cliente.nombre);
                    cuadrado.value = i;
                    cuadrado.classList.add('cliente');
                    panelCliente.append(cuadrado);
                    i++;
                }
            }
        })
}

// function borrarClientes(){
//     let clientes = document.querySelectorAll('.cliente');
//     for(let cliente of clientes){
//         panelCliente.removeChild(cliente);
//     }
// }

// function borrarProductos() {
//     let productos = document.querySelectorAll(".productos");
//     for(let producto of productos) {
//         selectProducto.removeChild(producto);
//     }
// }

function mostrarForm(entidad){
    // Formulario de Categorias.
    document.getElementById('frmNuevaCategoria').style.display = 'none';
    document.getElementById('frmBorrarCategoria').style.display = 'none';
    document.getElementById('frmActualizarCategoria').style.display = 'none';
    // Formulario de Productos.
    document.getElementById('frmNuevaProducto').style.display = 'none';
    document.getElementById('frmBorrarProducto').style.display = 'none';
    document.getElementById('frmActualizarProducto').style.display = 'none';
    // Formulario de Comerciales.
    document.getElementById('frmNuevaComerciales').style.display = 'none';
    document.getElementById('frmBorrarComerciales').style.display = 'none';
    document.getElementById('frmActualizarComerciales').style.display = 'none';
    // Formulario de Clientes.
    document.getElementById('frmNuevaClientes').style.display = 'none';
    document.getElementById('frmBorrarClientes').style.display = 'none';
    document.getElementById('frmActualizarClientes').style.display = 'none';

    switch(entidad){
        case 'categorias':
            document.getElementById('frmNuevaCategoria').style.display = 'block';
            document.getElementById('frmBorrarCategoria').style.display = 'block';
            document.getElementById('frmActualizarCategoria').style.display = 'block';
            break;
        case 'productos':
            document.getElementById('frmNuevaProducto').style.display = 'block';
            document.getElementById('frmBorrarProducto').style.display = 'block';
            document.getElementById('frmActualizarProducto').style.display = 'block';
            break;
        case 'comerciales':
            document.getElementById('frmNuevaComerciales').style.display = 'block';
            document.getElementById('frmBorrarComerciales').style.display = 'block';
            document.getElementById('frmActualizarComerciales').style.display = 'block';
            break;
        case 'clientes':
            document.getElementById('frmNuevaClientes').style.display = 'block';
            document.getElementById('frmBorrarClientes').style.display = 'block';
            document.getElementById('frmActualizarClientes').style.display = 'block';
            break;
    }
}

frmNuevaCategoria.addEventListener('submit', insertarCategoria);

function insertarCategoria(event){
    event.preventDefault();
    
    const nombre = document.getElementById('txtNuevaCategoria').value.trim();

    fetch(urlCategorias, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(nombre),
    })
    .then((res) => res.json())
    .then((categoria) => {
        cargarCategorias();
        cargarCategoriasActualizar();
        cargarCategoriasBorrar();
    })
    .catch((error) => console.error('Error al insertar categoria: ', error));
}

frmBorrarCategoria.addEventListener('submit', borrarCategoria);

function borrarCategoria(event){
    event.preventDefault();
    const fichero = '/categorias/';
    const nombreCategoria = selectCategoriaBorrar.value;
    const url = urlBase + fichero + nombreCategoria + '.json';
    fetch(url, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then((categoria) => {
        cargarCategorias();
        cargarCategoriasActualizar();
        cargarCategoriasBorrar();
    })
    .catch((error) => console.error('Error al insertar categoria: ', error));
}

frmActualizarCategoria.addEventListener('submit', actualizarCategoria);

function actualizarCategoria(event){
    event.preventDefault();
    
    const categoriaID = selectCategoriaActualizar.value;
    const nuevaCategoria = document.getElementById('txtActualizarCategoria').value.trim();

    const url = urlBase + '/categorias/' + categoriaID + '.json';
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(nuevaCategoria),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Categoría actualizada correctamente:", data);
        
        // Después de la actualización, cargar nuevamente las categorías
        cargarCategorias();
        cargarCategoriasActualizar();
        cargarCategoriasBorrar();
        
        // Limpiar el campo de nueva categoría después de la actualización
        document.getElementById('txtActualizarCategoria').value = '';
    })
    .catch(error => {
        console.error("Error al actualizar la categoría:", error);
    });
}

function cargarCategoriasActualizar(){
    fetch(urlCategorias)
        .then(response => response.json())
        .then(categorias => {
            selectCategoriaActualizar.innerHTML = '';
            for(let key in categorias){
                if(categorias.hasOwnProperty(key)){
                    const categoria = categorias[key];
                    const opcion = document.createElement('option');
                    opcion.value = key;
                    opcion.text = categoria;
                    selectCategoriaActualizar.append(opcion);
                }
            }
        })
        .catch(error => console.error('Error al obtener los datos de comerciales: ', error));
}

function cargarCategoriasBorrar(){
    fetch(urlCategorias)
        .then(response => response.json())
        .then(categorias => {
            selectCategoriaBorrar.innerHTML = '';
            for(let key in categorias){
                if(categorias.hasOwnProperty(key)){
                    const categoria = categorias[key];
                    const opcion = document.createElement('option');
                    opcion.value = key;
                    opcion.text = categoria;
                    selectCategoriaBorrar.append(opcion);
                }
            }
        })
        .catch(error => console.error('Error al obtener los datos de comerciales: ', error));
}

frmNuevaComerciales.addEventListener('submit', insertarComercial);

function insertarComercial(event){
    event.preventDefault();
    const nombre = document.getElementById('txtNuevoComercial').value.trim();

    fetch(urlComerciales, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(nombre),
    })
    .then((res) => res.json())
    .then((comercial) => {
        cargarComerciales();
        cargarComercialesActualizar();
        cargarComercialesBorrar();
    })
    .catch((error) => console.error('Error al insertar categoria: ', error));
}

frmBorrarComerciales.addEventListener('submit', borarComercial);

function borarComercial(event){
    event.preventDefault();
    const comercialID = selectComercialBorrar.value;
    const fichero = '/comerciales/';
    const url = urlBase + fichero + comercialID + '.json';
    fetch(url, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then((comercial) => {
        cargarComerciales();
        cargarComercialesActualizar();
        cargarComercialesBorrar();
    })
    .catch((error) => console.error('Error al insertar categoria: ', error));
}

frmActualizarComerciales.addEventListener('submit', actualizarComerciales);

function actualizarComerciales(event){
    event.preventDefault();
    const comercialID = selectCategoriaActualizar.value;
    const nombre = document.getElementById('txtActualizarComercial').value.trim();
    const url = urlBase + '/comerciales/' + comercialID + '.json';

    fetch(url, {
            method: 'PUT',
            body: JSON.stringify(nombre),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("Comercial actualizado correctamente:", data);
            
            // Después de la actualización, cargar nuevamente las categorías
            cargarComerciales();
            cargarComercialesActualizar();
            cargarComercialesBorrar();
            
            // Limpiar el campo de nueva categoría después de la actualización
            document.getElementById('txtActualizarCategoria').value = '';
        })
        .catch(error => {
            console.error("Error al actualizar la categoría:", error);
        });
}

function cargarComercialesActualizar(){
    fetch(urlComerciales)
        .then(response => response.json())
        .then(comerciales => {
            // console.log('Datos obtenidos:', comerciales);
            selectComercialActualizar.innerHTML = '';
            for(let key in comerciales){
                if(comerciales.hasOwnProperty(key)){
                    const comercial = comerciales[key];
                    const opcion = document.createElement('option');
                    opcion.value = key;
                    opcion.text = comercial;
                    selectComercialActualizar.append(opcion);
                }
            }
        })
        .catch(error => console.error('Error al obtener los datos de comerciales: ', error));
}

function cargarComercialesBorrar(){
    fetch(urlComerciales)
    .then(response => response.json())
    .then(comerciales => {
        selectComercialBorrar.innerHTML = '';
        for(let key in comerciales){
            if(comerciales.hasOwnProperty(key)){
                const categoria = comerciales[key];
                const opcion = document.createElement('option');
                opcion.value = key;
                opcion.text = categoria;
                selectComercialBorrar.append(opcion);
            }
        }
    })
    .catch(error => console.error('Error al obtener los datos de comerciales: ', error));
}