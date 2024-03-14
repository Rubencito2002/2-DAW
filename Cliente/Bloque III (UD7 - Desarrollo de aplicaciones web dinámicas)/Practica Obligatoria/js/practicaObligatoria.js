// Para poder realizar la carga inicial de la página con los datos necesarios siempre que se recargue la página.
document.addEventListener("DOMContentLoaded", inicializar);

function inicializar(){
    cargarComerciales();
    cargarClientes();
    cargarCategorias();
    cargarProductos();
    mostrarForm('categorias');
    // Llamada a funciones para cargar combos de los formularios del CRUD.
    cargarCategoriasActualizar();
    cargarCategoriasBorrar();
    cargarComercialesActualizar();
    cargarComercialesBorrar();
    cargarCategoriasAñadirProductos();
    cargarComercialAñadirCliente();
    cargarComercialBorrarCliente();
    cargarClientesBorrar();
    cargarComercialActualizarCliente();
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
// Declaracion del selector de categoria del formulario de actualizar categoria.
let selectCategoriaActualizar = document.getElementsByName('categoriasActualizar')[0];
let selectCategoriaBorrar = document.getElementsByName('categoriasBorrar')[0];
// Declaracion del selector de categoria del formulario de actualizar categoria.
let selectComercialActualizar = document.getElementsByName('comercialesActualizar')[0];
let selectComercialBorrar = document.getElementsByName('comercialesBorrar')[0];
// Declaracion de selectores para los formularios de productos.
let selectCategoriaProductoAñadir = document.getElementsByName('categoriasProductosAñadir')[0];
// Declaracion de selectores para los formularios de clientes.
let selectComercialClienteAñadir = document.getElementsByName('comercialesCliente')[0];
let selectComercialClienteBorrar = document.getElementsByName('comercialesClienteBorrar')[0];
let selectClienteBorrar = document.getElementsByName('clienteBorrar')[0];
let selectClienteActualizar = document.getElementsByName('clienteActualizar')[0];
let selectComercialClienteActualizar = document.getElementsByName('comercialesClienteActualizar')[0];

// URL de la base de datos para recoger los datos iniciales.
const urlBase = 'https://proyectocliente-9ebc8-default-rtdb.europe-west1.firebasedatabase.app/';
const urlComerciales = 'https://proyectocliente-9ebc8-default-rtdb.europe-west1.firebasedatabase.app/comerciales.json';
const urlCategorias = 'https://proyectocliente-9ebc8-default-rtdb.europe-west1.firebasedatabase.app/categorias.json';
const urlProductos = 'https://proyectocliente-9ebc8-default-rtdb.europe-west1.firebasedatabase.app/productos.json';
const urlClientes = 'https://proyectocliente-9ebc8-default-rtdb.europe-west1.firebasedatabase.app/clientes.json';

// Cargas principales de los datos de firebase.

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
    fetch(urlProductos)
        .then((response) => response.json())
        .then((data) => Object.values(data))
        .then(actualizarProductos)
}

function actualizarProductos(productos){
    const categoriaSeleccionada = selectCategoria.selectedIndex;

    selectProducto.innerHTML = '';

    for(let key in productos){
        const producto = productos[key];
        if(producto.idCategoria === categoriaSeleccionada){
            const opcion = document.createElement('option');
            opcion.text = producto.nombreProducto;
            selectProducto.add(opcion);
        }
    }
}

function cargarClientes(){
    fetch(urlClientes)
        .then((response) => response.json())
        .then((data) => Object.values(data))
        .then((clientes) => {
            const indice = selectComercial.selectedIndex;
            if(indice >= 0){
                actualizarClientes(clientes);
            } else {
                selectComercial.selectedIndex = 0;
                actualizarClientes(clientes);
            }
        })
}

function actualizarClientes(clientes){
    eliminarClientesPanel();

    const indice = selectComercial.selectedIndex;
    // console.log(indice);
    const claveComercial = Object.keys(clientes)[indice];
    const clienteComercial = clientes[claveComercial];

    for(let cliente in clienteComercial){
        const nombreCliente = clienteComercial[cliente];
        const cuadrado = document.createElement('div');
        cuadrado.textContent = nombreCliente;
        cuadrado.classList.add('cliente');
        cuadrado.classList.add('pagado');
        panelCliente.appendChild(cuadrado);
    }
}

function eliminarClientesPanel(){
    let clientes = document.querySelectorAll('.cliente');
    for(let cliente of clientes){
        panelCliente.removeChild(cliente);
    }
}

function mostrarForm(entidad){
    // Formulario de Categorias.
    document.getElementById('frmNuevaCategoria').style.display = 'none';
    document.getElementById('frmBorrarCategoria').style.display = 'none';
    document.getElementById('frmActualizarCategoria').style.display = 'none';
    // Formulario de Productos.
    document.getElementById('frmNuevaProducto').style.display = 'none';
    document.getElementById('frmProducto').style.display = 'none';
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
            document.getElementById('frmProducto').style.display = 'block';
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

/*** CRUD DE Categorias ***/

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
        cargarCategoriasAñadirProductos();
        cargarComercialBorrarCliente();
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
        cargarCategoriasAñadirProductos();
        cargarComercialBorrarCliente();
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
        cargarCategoriasAñadirProductos();
        cargarComercialBorrarCliente();
        
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

/*** CRUD DE Comerciales ***/

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
        cargarComercialAñadirCliente();
        cargarComercialActualizarCliente();
    })
    .catch((error) => console.error('Error al insertar comercial: ', error));
}

frmBorrarComerciales.addEventListener('submit', borarComercial);

function borarComercial(event){
    event.preventDefault();
    const comercialID = selectComercialBorrar.value;
    const fichero = '/comerciales/';
    const url = urlBase + fichero + comercialID + '.json';
    console.log(comercialID);
    fetch(url, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then((comercial) => {
        cargarComerciales();
        cargarComercialesActualizar();
        cargarComercialesBorrar();
        cargarComercialAñadirCliente();
        cargarComercialActualizarCliente();
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
            cargarComercialAñadirCliente();
            cargarComercialActualizarCliente();
            
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

/*** CRUD DE Productos ***/
frmNuevaProducto.addEventListener('submit', insertarProducto);

function cargarCategoriasAñadirProductos(){
    fetch(urlCategorias)
        .then(response => response.json())
        .then(categorias => {
            // console.log('Datos obtenidos:', categorias);
            selectCategoriaProductoAñadir.innerHTML = '';
            for(let key in categorias){
                if(categorias.hasOwnProperty(key)){
                    const categoria = categorias[key];
                    const opcion = document.createElement('option');
                    opcion.value = key;
                    opcion.text = categoria;
                    selectCategoriaProductoAñadir.append(opcion);
                }
            }
        })
        .catch(error => console.error('Error al obtener los datos de comerciales: ', error));
}

function insertarProducto(event){
    const categoriaSeleccionada = selectCategoriaProductoAñadir.selectedIndex;
    const idProducto = document.getElementById('numberIdProducto').value.trim();
    const nombreProducto = document.getElementById('txtNuevoProducto').value.trim();
    const precio = document.getElementById('precioUnitario').value.trim();

    const nuevoProducto = {
        idCategoria : categoriaSeleccionada,
        idProducto: idProducto,
        nombreProducto: nombreProducto,
        precioUnidad: precio,
    };
    
    event.preventDefault();

    fetch(urlProductos, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(nuevoProducto),
    })
    .then((res) => res.json())
    .then((producto) => {
        cargarProductos();
    })
    .catch((error) => console.error('Error al insertar el producto: ', error));
}

document.getElementById('btnBorrarProducto').addEventListener('submit', borrarProducto);

function borrarProducto(event){
    const idProductoBorrar = selectProducto.value;
    const fichero = '/productos/';
    const url = urlBase + fichero + idProductoBorrar + '.json';
    event.preventDefault();
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(null),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al eliminar el producto');
        }
        return response.json();
    })
    .then((producto) => {
        cargarProductos();
    })
    .catch((error) => console.error('Error al insertar categoria: ', error));
}

document.getElementById('btnActualizarProducto').addEventListener('submit', actualizarProducto);

function actualizarProducto(event){
    const idProductoActualizar = selectProducto.value;
    const fichero = '/productos/';
    const nombre = document.getElementById('txtActualizarProducto').value.trim();
    const url = urlBase + fichero + idProductoActualizar + '.json';
    event.preventDefault();

    fetch(url, {
        method: 'PATCG',
        body: JSON.stringify(nombre),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Producto actualizado correctamente:", data);
        cargarProductos();
        
        // Limpiar el campo de nueva categoría después de la actualización
        document.getElementById('txtActualizarCategoria').value = '';
    })
    .catch(error => {
        console.error("Error al actualizar la categoría:", error);
    });
}

/*** CRUD DE Clientes ***/
frmNuevaClientes.addEventListener('submit', insertarCliente);

function cargarComercialAñadirCliente(){
    fetch(urlComerciales)
    .then(response => response.json())
    .then(comerciales => {
        // console.log('Datos obtenidos:', comerciales);
        selectComercialClienteAñadir.innerHTML = '';
        for(let key in comerciales){
            if(comerciales.hasOwnProperty(key)){
                const comercial = comerciales[key];
                const opcion = document.createElement('option');
                opcion.value = key;
                opcion.text = comercial;
                selectComercialClienteAñadir.append(opcion);
            }
        }
    })
    .catch(error => console.error('Error al obtener los datos de comerciales: ', error));
}

function insertarCliente(event) {
    const comercialId = selectComercialClienteAñadir.selectedIndex;
    const nuevoCliente = document.getElementById('txtNuevaCliente').value.trim();
    event.preventDefault();
    // console.log('Índice seleccionado:', comercialId);

    // Obtén la array actual de clientes desde la base de datos
    fetch(urlClientes)
        .then(response => response.json())
        .then(clientes => {
            console.log('Clientes actuales:', clientes);
            // Asegúrate de que clientes sea un array
            clientes = clientes || [];
    
            // Asegúrate de que el índice del comercial exista
            if (comercialId >= 0 && comercialId < clientes.length && clientes[comercialId]) {
                console.log('Índice de comercial válido. Agregando cliente...');
                // Asegúrate de que la array de clientes asociada al comercial exista
                clientes[comercialId] = clientes[comercialId] || [];
        
                // Agrega el nuevo cliente a la array de clientes asociada al comercial
                clientes[comercialId].push(nuevoCliente);
        
                // Actualiza la base de datos con la nueva array de clientes
                return fetch(urlClientes, {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(clientes)
                });
            } else {
                throw new Error('Índice de comercial no válido');
            }
        })
        .then(() => {
            alert('Cliente agregado al comercial exitosamente');
        })
        .catch(error => {
            console.error('Error al agregar el cliente al comercial:', error);
        });
}

function cargarComercialBorrarCliente(){
    fetch(urlComerciales)
    .then(response => response.json())
    .then(comerciales => {
        // console.log('Datos obtenidos:', comerciales);
        selectComercialClienteBorrar.innerHTML = '';
        for(let key in comerciales){
            if(comerciales.hasOwnProperty(key)){
                const comercial = comerciales[key];
                const opcion = document.createElement('option');
                opcion.value = key;
                opcion.text = comercial;
                selectComercialClienteBorrar.append(opcion);
            }
        }
    })
    .catch(error => console.error('Error al obtener los datos de comerciales: ', error));
}

selectComercialClienteBorrar.addEventListener('change', cargarClientesBorrar);

function cargarClientesBorrar(){
    fetch(urlClientes)
        .then((response) => response.json())
        .then((data) => Object.values(data))
        .then((clientes) => {
            const indice = selectComercial.selectedIndex;
            if(indice >= 0){
                actualizarClientesBorrar(clientes);
            } else {
                selectComercial.selectedIndex = 0;
                actualizarClientesBorrar(clientes);
            }
        })
}

function actualizarClientesBorrar(clientes){
    selectClienteBorrar.innerHTML = '';

    const indice = selectComercialClienteBorrar.selectedIndex;
    const claveComercial = Object.keys(clientes)[indice];
    const clienteComercial = clientes[claveComercial];

    for(let cliente in clienteComercial){
        const nombreCliente = clienteComercial[cliente];
        const opcion = document.createElement('option');
        opcion.text = nombreCliente;
        selectClienteBorrar.add(opcion);
    }
}

frmBorrarClientes.addEventListener('submit', borrarCliente);

function borrarCliente(event){
    const indiceCliente = selectClienteBorrar.selectedIndex;
    const indiceComercial = selectComercialClienteBorrar.selectedIndex;

    event.preventDefault();

    fetch(urlClientes)
        .then(response => response.json())
        .then(clientes => {
            clientes = clientes || [];

            if(indiceComercial >= 0 && indiceComercial < clientes.length){
                if(indiceCliente >= 0 && indiceCliente < clientes[indiceComercial].length){
                    clientes[indiceComercial].splice(indiceComercial, 1);

                    return fetch(urlClientes, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(clientes)
                    });
                } else {
                    throw new Error('Índice de cliente no válido.');
                }
            } else {
                throw new Error('Índice de comercial no válido.')
            }
        })
        .then(() => {
            alert('Cliente eliminado exitosamente.');
        })
        .catch(error => {
            console.error('Error al eliminar el cliente: ', error);
        })
}

function cargarComercialActualizarCliente(){
    fetch(urlComerciales)
    .then(response => response.json())
    .then(comerciales => {
        // console.log('Datos obtenidos:', comerciales);
        selectComercialClienteActualizar.innerHTML = '';
        for(let key in comerciales){
            if(comerciales.hasOwnProperty(key)){
                const comercial = comerciales[key];
                const opcion = document.createElement('option');
                opcion.value = key;
                opcion.text = comercial;
                selectComercialClienteActualizar.append(opcion);
            }
        }
    })
    .catch(error => console.error('Error al obtener los datos de comerciales: ', error));
}

selectComercialClienteActualizar.addEventListener('change', cargarClientesActualizar);

function cargarClientesActualizar(){
    fetch(urlClientes)
        .then((response) => response.json())
        .then((data) => Object.values(data))
        .then((clientes) => {
            const indice = selectComercialClienteActualizar.selectedIndex;
            if(indice >= 0){
                actualizarClientesActualizar(clientes);
            } else {
                selectComercialActualizar.selectedIndex = 0;
                actualizarClientesActualizar(clientes);
            }
        })
}

function actualizarClientesActualizar(clientes){
    selectClienteActualizar.innerHTML = '';

    const indice = selectComercialClienteActualizar.selectedIndex;
    const claveComercial = Object.keys(clientes)[indice];
    const clienteComercial = clientes[claveComercial];

    for(let cliente in clienteComercial){
        const nombreCliente = clienteComercial[cliente];
        const opcion = document.createElement('option');
        opcion.text = nombreCliente;
        selectClienteActualizar.add(opcion);
    }
}

frmActualizarClientes.addEventListener('submit', actualizarCliente);

function actualizarCliente(){
    const idCliente = selectClienteActualizar.value;
    const nombre = document.getElementById('txtActualizarCliente').value.trim();
    const fichero = '/clientes/';
    const url = urlBase + fichero + idCliente + '.json';

    fetc(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nombre)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
            })
        .then(data => {
            console.log('Cliente actualizado con éxito:', data);
        })
        .catch(error => {
            console.error('Error al actualizar el cliente:', error);
        });
}