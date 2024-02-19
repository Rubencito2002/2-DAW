const comerciales = ["Carmen Gómez", "Lucía Gil", "Andrés Martínez", "Antonio Salinas"];
const clientes = [
  [
    "Alimentación Daniel",
    "Cash El Puerto",
    "Ultramarinos Claudia",
    "Supermercado Nazareno",
    "Alimentación Guzmán",
    "Supermercado Superprecio",
    "Kiosko La Espera",
    "M&B Alimentación",
    "Ultramarinos Vistabella",
  ],
  [
    "Ultramarinos La Delicia",
    "Supermercado La Esquinita",
    "Alimentación Gómez",
    "Supermercado El Veloz",
    "Kiosko 24h Desavío",
    "Tienda La Manchega",
    "Ultramarinos Tajo",
    "Alimentación Víctor",
  ],
  [
    "Alimentación Millán",
    "Supermercado La Guinda",
    "Kiosko Callejón",
    "Tienda Cantero",
    "Ultramarinos Mérida",
    "Alimentación Moreno",
    "Cash El Hostelero",
  ],
  [
    "Kiosko La Lumbre",
    "Tienda Abad",
    "Ultramarinos Hernández",
    "Alimentación Cervantes",
    "Cash El Panal",
    "CyR Alimentación",
    "Supermercado Los Mosqueteros",
    "Alimentación Carpanta",
    "Supermercado El Percebe",
  ],
];
const categorias = ["Aceite", "Encurtidos", "Salsas"];

const catalogo = new Catalogo();
const gestor = new Gestor();

function cargaDatosIniciales() {
  catalogo.añadirProducto(1, "Aceite Oliva Virgen Extra 1l (Caja 20)", 178.15, 0);
  catalogo.añadirProducto(2,"Aceite Oliva Virgen Extra 700ml (Caja 30)",208.5,0);
  catalogo.añadirProducto(3, "Aceite Oliva Virgen Extra 5l (Caja 6)", 247.5, 0);
  catalogo.añadirProducto(4, "Aceite Oliva 1l (Caja 20)", 109.25, 0);
  catalogo.añadirProducto(5, "Aceituna Gordal 340gr (Caja de 50)", 180.75, 1);
  catalogo.añadirProducto(6,"Aceituna Gordal deshuesada 350gr (Caja de 50)",205.45,1);
  catalogo.añadirProducto(7, "Aceituna Manzanilla 250 gr (Caja de 50)", 124.85, 1);
  catalogo.añadirProducto(8,"Aceituna Manzanilla deshuesada 250 gr (Caja de 50)",141.35,1);
  catalogo.añadirProducto(9, "Aceituna Negra 350gr (Caja de 50)", 87.5, 1);
  catalogo.añadirProducto(10,"Aceituna Negra deshuesada 350gr (Caja de 50)",99.35,1);
  catalogo.añadirProducto(11, "Mayonesa 350gr (Caja de 50)", 124.45, 2);
  catalogo.añadirProducto(12, "Mayonesa 1Kg (Caja de 30)", 178.65, 2);
  catalogo.añadirProducto(13, "Salsa Cocktail 350gr (Caja de 50)", 99.65, 2);
  catalogo.añadirProducto(14, "Salsa Gaucha 350gr (Caja de 50)", 124.85, 2);
  catalogo.añadirProducto(15, "Salsa Alioli 350 gr (Caja de 50)", 113.75, 2);
  catalogo.añadirProducto(16, "Salsa Barbacoa 500gr (Caja de 30)", 67.5, 2);
}

function inicializarApp()
{
  cargaDatosIniciales();
  cargarCategorias();
  cargarComerciales();
  cargarClientes();
  actualizarPanelControles();
}

function cargarCategorias(){
  const selectCategoria = document.forms.frmControles.categorias;
  gestor.categorias.forEach((categoria, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.text = categoria;
    selectCategoria.add(option);
  });

  actualizarPanelControles();
}

// Añadiendo el evento de cambio al combo de las categorias para poder actualizar el panel de controles.
document.forms.frmControles.categorias.addEventListener('change', actualizarPanelControles);

// Funcion para actualizar todo el panel de controles.
function actualizarPanelControles() {
  const selectCategoria = document.forms.frmControles.categorias;
  const selectProducto = document.forms.frmControles.productos;

  const categoriaSeleccionada = parseInt(selectCategoria.value, 10);
  const productoFiltrado = catalogo.productos.filter(producto => producto.idCategoria === categoriaSeleccionada);

  selectProducto.innerHTML = '';

  productoFiltrado.forEach(producto => {
    const option = document.createElement('option');
    option.value = producto.idProducto;
    option.text = producto.nombreProducto;
    selectProducto.add(option);
  });
}

// Funcion para cargar los comerciales en el combo de comerciales del panel de cliente
function cargarComerciales(){
  const selectComercial = document.forms.frmComercial.comerciales;
  gestor.comerciales.forEach((comercial, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.text = comercial;
    selectComercial.add(option);
  });

  actualizarPanelControles();
}

function cargarClientes(){
  const panelCliente = document.getElementById('clientes');
  const selectComercial = document.forms.frmComercial.comerciales;
  const clientesComercialActual = gestor.clientes[selectComercial.selectedIndex];
  console.log('clientesComercialActual:', clientesComercialActual);

  for(let i = 0; i < clientesComercialActual.length; i++) {
    const cliente = clientesComercialActual[i];
    const clienteElement = crearElementoCliente(cliente);
    clienteElement.addEventListener('click', () => seleccionarCliente(comercialActual, index));
    panelCliente.appendChild(clienteElement);
  }
}

function crearElementoCliente(cliente){
  const clienteElement = document.createElement('div');
  clienteElement.textContent = cliente.nombre;
  // Aplicar clases CSS según la propiedad cuentaAbierta
  if (cliente.cuentaAbierta) {
    clienteElement.classList.add('cliente', 'pendiente');
  } else {
    clienteElement.classList.add('cliente', 'pagado');
  }
  return clienteElement;
}

// Añadiendo el evento de cambio al combo de las comerciales para poder actualizar el panel de cliente.
document.forms.frmComercial.comerciales.addEventListener('change', actualizarCliente);

function actualizarCliente(){
  console.log('Actualizando panel de clientes...');
  const panelCliente = document.getElementById('clientes');
  const selectComercial = document.forms.frmComercial.comerciales;
  const clientesComercialActual = gestor.clientes[selectComercial.selectedIndex];
  console.log('clientesComercialActual', clientesComercialActual);
  
  // Limpiar solo los clientes anteriores.
  const clienteAnteriores = panelCliente.getElementsByClassName('cliente');
  while(clienteAnteriores.length > 0){
    panelCliente.removeChild(clienteAnteriores[0]);
  }

  for(let i = 0; i < clientesComercialActual.length; i++) {
    const cliente = clientesComercialActual[i];
    const clienteElement = crearElementoCliente(cliente);
    crearTablaPedido();
    clienteElement.addEventListener('click', () => seleccionarCliente(comercialActual, index));
    panelCliente.appendChild(clienteElement);
  }
}

// Funcion para comprobar si un cliente tiene un pedido.
function seleccionarCliente(comercialActual, clienteIndex){
  const cliente = gestor.cliente[comercialActual, clienteIndex];

  if(!cliente.cuentaAbierta){
    cliente.cuentaAbierta = True;
    actualizarCliente();
  } else{
    console.log('Cliente ya tiene un pedido en curso');
  }
}

// Llamada para el evento del teclado numerico para añadir un pedido.
document.getElementById('teclado').addEventListener('click', agregarLineaPedido);

// Funcion para añadir un nuevo pedido.
function agregarLineaPedido(event){
  const productoSeleccionado = obtenerProducto();
  const unidades = parseInt(event.target.value);

  if(!isNaN(unidades)){
    const clienteActual = obtenerCliente();
    if(unidades >= 1 && unidades <= 9){
      const nuevaLinea = {productoSeleccionado, unidades, total: calcularTotal(productoSeleccionado, unidades)};
      clienteActual.pedido.push(nuevaLinea);
      actualizarTablaPedidos();
    }
  } else {
    alert('Error al obtener las unidades seleccionada.');
  }
}

// Funcion para obtener el producto actual seleccionado.
function obtenerProducto(){
  const selectProducto = document.forms.frmControles.productos;
  console.log("Valor del selectProducto:", selectProducto.value);
  const idProductoSeleccionado = parseInt(selectProducto.value);

  if(typeof catalogo.producto === 'object' && catalogo.producto !== null){
    const productoSeleccionado = catalogo.producto[idProductoSeleccionado];
    if(productoSeleccionado){
      return productoSeleccionado;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

// Funcion para obtener el cliente actual.
function obtenerCliente(){
  const clienteActual = gestor.clienteActual;
  return gestor.clientes[gestor.comercialActual][clienteActual];
}

// Funcion para calcular el total del producto.
function calcularTotal(producto, unidades){
  if (typeof producto === 'object' && producto !== null && 'precioUnidad' in producto && typeof unidades === 'number') {
    return producto.precioUnidad * unidades;
  } else {
    console.error("El producto no es un objeto válido, no tiene la propiedad precioUnidad, o las unidades no son un número.");
    return null; // O manejar el error de alguna manera apropiada
  }
}

function crearTablaPedido(){
  const contenedorPedido = document.getElementById('pedido');
  
  // Crear el boton.
  const botonPagar = document.createElement('button');
  botonPagar.textContent = 'PEDIDO ENVIADO Y COBRADO';
  botonPagar.classList.add('boton');
  
  // Crear la tabla de pedido
  const tablaPedido = document.createElement('table');
  tablaPedido.id = 'tablaPedido';

  // Crear el encabezado de la tabla.
  const encabezado = tablaPedido.createTHead();
  const encabezadoFila = encabezado.insertRow();
  encabezadoFila.innerHTML = '<th>Modificar</th><th>Uds.</th><th>Id.</th><th>Producto</th><th>Total</th>';

  // Crear el cuerpo de la tabla.
  const cuerpoTabla = document.createElement('tbody');
  tablaPedido.appendChild(cuerpoTabla);

  // Agregar la tabla despues del titulo en el contenedor.
  contenedorPedido.appendChild(botonPagar);
  contenedorPedido.appendChild(tablaPedido);
  // contenedorPedido.insertBefore(tablaPedido, contenedorPedido.querySelector('h1').nextSibling);
}

function actualizarTablaPedidos(){
  const nuevaLinea = obtenerCliente().pedido.slice(-1)[0];
  const fila = cuerpoTabla.insertRow();

  const celdaMoficar = fila.insertCell(0);
  celdaMoficar.classList.add('modificar-celda');
  const botonAñadir = document.createElement('button');
  botonAñadir.textContent = '+';
  botonAñadir.classList.add('boton-añadir');
  botonAñadir.addEventListener('click', function () {
    nuevaLinea.unidades++;
    celdaUnidades.textContent = nuevaLinea.unidades;
    celdaTotal.textContent = nuevaLinea.total;
  });
  celdaMoficar.appendChild(botonAñadir);

  const botonMenos = document.createElement('button');
  botonMenos.textContent = '-';
  botonMenos.classList.add('boton-menos');
  botonMenos.addEventListener('click', function () {
    if(nuevaLinea.unidades > 1){
      nuevaLinea.unidades--;
      celdaUnidades.textContent = nuevaLinea.unidades;
      celdaTotal.textContent = nuevaLinea.total;
    } else {
      const confirmacion = confirm('¿Deseas eliminar esta linea de pedido?');
      if(confirmacion){
        cuerpoTabla.deleteRow(fila.rowIndex);
        const clienteActual = obtenerCliente();
        clienteActual.pedido.splice(clienteActual.pedido.indexOf(nuevaLinea), 1);
      }
    }
  });
  celdaMoficar.appendChild(botonMenos);

  const celdaProducto = fila.insertCell(1);
  celdaProducto.classList.add('producto-celda');
  celdaProducto.textContent = nuevaLinea.producto;

  const celdaUnidades = fila.insertCell(2);
  celdaUnidades.classList.add('unidades-celda');
  celdaUnidades.textContent = nuevaLinea.unidades;

  const celdaTotal = fila.insertCell(3);
  celdaTotal.classList.add('total-celda');
  celdaTotal.textContent = nuevaLinea.total;
}
  

inicializarApp();