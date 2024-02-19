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
const gestor = new Gestor(comerciales, clientes, categorias);

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

// Selector de comerciales con un evento de cambiar cuando se cambie el comercial poder cargar sus clientes.
let selectComercial = document.getElementsByName("comerciales")[0];
selectComercial.addEventListener("change", cargarCliente);
// Declaracion del panel del cliente con un evento de click para poder realizar los pedidos de cada cliente.
let panelCliente = document.getElementById("clientes");
panelCliente.addEventListener("click", actualizarPanelCliente);
// Selector de categoria con un evento de cambiar cuando se cambie de categoria se cargue el selector de productos.
let selectCategoria = document.getElementsByName("categorias")[0];
selectCategoria.addEventListener("change", cargarProductos);
// Declaracion del selector de producto.
let selectProducto = document.getElementsByName("productos")[0];
// Declaracion del panel de pedido.
let panelPedido = document.getElementById("pedido");
// Declaracion del titulo con el nombre de cliente para el panel de pedido.
let tituloCliente = document.createElement("h3");
tituloCliente.id = "tituloCliente";
panelPedido.append(tituloCliente);
// Declaracion de cada boton de la botonera del panel central para añadir un evento para que sean funcionales.
let teclado = document.getElementById("teclado");
teclado.addEventListener("click", tecladoPulsado);
// Declaracion del total con la cantidad total del pedido para el panel de pedido.
let total = document.createElement("h3");
total.id = "total";
panelPedido.append(total);
// Declaracion del boton para poder finalizar el pedido en el panel de pedido con su evento para realizar el cierre del pedido.
let botonEnviar = document.createElement("button");
botonEnviar.id = "botonEnviar";
botonEnviar.classList.add("boton");
botonEnviar.textContent = "PEDIDO ENVIADO Y COBRADO";
botonEnviar.addEventListener("click", enviarPedido);
// Declaracion de la tabla para poder mostrar que es lo que esta pidiento el comercial para el cliente actual que este en el panel de pedido.
let table = document.createElement("table");
panelPedido.append(table);
// Para poder realizar la carga inicial de la página con los datos necesarios siempre que se recargue la página.
document.addEventListener("DOMContentLoaded", inicializar);

function inicializar(){
  cargaDatosIniciales();
  cargarComerciales();
  cargarCliente();
  cargarCategorias();
  cargarProductos();
}

function cargarComerciales() {
  let i = 0;
  for(let comercial of gestor.comerciales) {
    let opcion = document.createElement("option");
    opcion.textContent=comercial;
    opcion.value = i
    selectComercial.append(opcion);
    i++;
  }
}

function cargarCategorias() {
  let i = 0;
  for(let categoria of gestor.categorias) {
    let opcion = document.createElement("option");
    opcion.textContent=categoria;
    opcion.value = i
    selectCategoria.append(opcion);
    i++;
  }
}

function cargarProductos() {
  borrarProductos()
  let i = 0;
  for(let producto of catalogo.productos) {
    if(producto.idCategoria == selectCategoria.selectedIndex) {
      let opcion = document.createElement("option");
      opcion.textContent=producto.nombreProducto;
      opcion.value = producto.idProducto
      opcion.id = i
      opcion.classList.add("productos")
      selectProducto.append(opcion);
      i++;
    }
  }
}

function cargarCliente() {
  borrarClientes();
  let comercialIndex = selectComercial.selectedIndex;
  gestor.comercialActual=comercialIndex;
  gestor.clienteActual=0;
  let i = 0;
  for(let cliente of gestor.clientes[comercialIndex]){
    let cuadrado = document.createElement("div");
    cuadrado.append(cliente.nombre);
    cuadrado.value=i;
    cuadrado.classList.add("cliente");
    if(cliente.cuentaAbierta){
      cuadrado.classList.add("pendiente");
    } else {
      cuadrado.classList.add("pagado");
    }
    panelCliente.append(cuadrado);
    i++;
  }  
  tituloCliente.textContent="Cliente " + gestor.clientes[gestor.comercialActual][0].nombre;
  totalPedido();
}

function borrarClientes() {
  let clientes = document.querySelectorAll(".cliente");
  for(let cliente of clientes) {
    panelCliente.removeChild(cliente);
  }
}

function borrarProductos() {
  let productos = document.querySelectorAll(".productos");
  for(let producto of productos) {
    selectProducto.removeChild(producto);
  }
}

function actualizarPanelCliente(event){
  if (event.target.classList.contains("cliente")) {
    tituloCliente.textContent = "Cliente " + event.target.textContent;
    gestor.clienteActual=event.target.value;
    totalPedido();
  }
}

function tecladoPulsado(event) {
  if(event.target.classList.contains("tecla")){
    for(let cuadrado of panelCliente.children)
      if(gestor.clienteActual==cuadrado.value){
        cuadrado.classList.remove("pagado");
        cuadrado.classList.add("pendiente");
        gestor.clientes[gestor.comercialActual][gestor.clienteActual].cuentaAbierta=true;
      }
      nuevoPedido(event.target)
  }
}

function nuevoPedido(tecla) {
  let unidades = parseInt(tecla.value);
  let idProducto = selectProducto.value;
  if(gestor.pedidos[gestor.comercialActual][gestor.clienteActual].find(p => idProducto == p.idProducto)){
    alert("Ya existe este producto en el pedido, si quiere modificar la cantidad utilice los controles de la cuenta");
  } else {
    let lineaPedido = new LineaPedido(unidades, idProducto);
    console.log(lineaPedido);
    console.log(gestor);
    gestor.pedidos[gestor.comercialActual][gestor.clienteActual].push(lineaPedido);
    totalPedido();
  }
}

function totalPedido() {
  let totalPedido = 0
  
  if(gestor.pedidos[gestor.comercialActual][gestor.clienteActual].length<=0)
    for(let cuadrado of panelCliente.children)
      if(gestor.clienteActual==cuadrado.value){
        cuadrado.classList.remove("pendiente");
        cuadrado.classList.add("pagado");
        gestor.clientes[gestor.comercialActual][gestor.clienteActual].cuentaAbierta=false;
      }
      
  for (let lineaPedido of gestor.pedidos[gestor.comercialActual][gestor.clienteActual]) {
    for(let producto of catalogo.productos.filter(p => p.idProducto == lineaPedido.idProducto)){
      totalPedido += parseFloat(producto.precioUnidad) * parseFloat(lineaPedido.unidades);
    }
  }
  if(totalPedido != 0) {
    total.textContent = "TOTAL: " + totalPedido.toFixed(2) + "€";
    total.after(botonEnviar);
  } else {
    if (panelPedido.contains(botonEnviar)){
      panelPedido.removeChild(botonEnviar);
    }
    total.textContent = "";
  }

  mostrarPedido();
}

function mostrarPedido() {
  let lineasPedidos = gestor.pedidos[gestor.comercialActual][gestor.clienteActual];
  if(lineasPedidos.length!=0){
    table.innerHTML="<th>Modificar</th><th>Uds.</th><th>Id.</th><th colspan='2'>Producto</th><th>Precio</th>";
    for(let lineaPedido of gestor.pedidos[gestor.comercialActual][gestor.clienteActual]){
      let indice = gestor.pedidos[gestor.comercialActual][gestor.clienteActual].indexOf(lineaPedido);
      let producto = catalogo.productos.filter(p => p.idProducto == lineaPedido.idProducto)[0];
      table.innerHTML+="<tr><td><button onclick='sumarUnidad("+indice+")'class='modificador'>+</button><button onclick='restarUnidad("+indice+")' class='modificador'>-</button></td><td>"+ lineaPedido.unidades +"</td><td>" + producto.idProducto + "</td><td colspan='2'>" + producto.nombreProducto + "</td><td>" + (producto.precioUnidad * lineaPedido.unidades).toFixed(2) + "</td></tr>";
    }
  }
  else
    table.innerHTML="";
}

function sumarUnidad(indice) {
  let lineaPedido = gestor.pedidos[gestor.comercialActual][gestor.clienteActual][indice];
  lineaPedido.unidades++;
  totalPedido();
}

function restarUnidad(indice) {
  let lineaPedido = gestor.pedidos[gestor.comercialActual][gestor.clienteActual][indice];

  if(lineaPedido.unidades == 1) {
    let confirmacion = confirm("¿Está seguro que quiere eliminar este producto del pedido?");
    if (confirmacion) {
      lineaPedido.unidades--;
      let lineasPedido = gestor.pedidos[gestor.comercialActual][gestor.clienteActual]
      gestor.pedidos[gestor.comercialActual][gestor.clienteActual] = lineasPedido.filter(l => l !== lineaPedido);
    }
  } else {
    lineaPedido.unidades--;
  }
  totalPedido();
}

function enviarPedido() {
  let confirmacion = confirm("¿Estás seguro que quieres dar por finalizado este pedido?");
  if (confirmacion) {
    gestor.pedidos[gestor.comercialActual][gestor.clienteActual] = [];
    totalPedido();
  }
}