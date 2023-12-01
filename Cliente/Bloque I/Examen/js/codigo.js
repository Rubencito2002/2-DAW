let oTienda = new Tienda();

datosIniciales();

function datosIniciales() {}

// Gestión de formularios
function gestionFormularios(sFormularioVisible) {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) {
    case "frmAltaCatalogo":
      frmAltaCatalogo.style.display = "block";
      break;
    case "frmEntradaStock":
      frmEntradaStock.style.display = "block";
      break;
    case "frmSalidaStock":
      frmSalidaStock.style.display = "block";
      break;
  }
}

function ocultarTodosLosFormularios() {
  let oFormularios = document.querySelectorAll("form");

  for (let i = 0; i < oFormularios.length; i++) {
    oFormularios[i].style.display = "none";
  }
}

function aceptarAltaCatalogo() {
  let marca = frmAltaCatalogo.txtMarca.value.trim();
  let modelo = frmAltaCatalogo.txtModelo.value.trim();
  let precio = parseInt(frmAltaCatalogo.txtPrecio.value.trim());
  let tarjetaGrafica = frmAltaCatalogo.txtGrafica.value.trim();
  let pulgadas = parseInt(frmAltaCatalogo.txtPulgadas.value.trim());
  let sDiscoSDD = frmAltaCatalogo.rbtDiscoSSD.value;
  let discoSDD = sDiscoSDD == "S" ? true : false;
  let oOrdenador;

  if(frmAltaCatalogo.rbtOrdenador.value === 'Sobremesa')
  {
    oOrdenador = new Sobremesa(marca,modelo,precio, tarjetaGrafica); 
  }
  else
  {
    oOrdenador = new Portatil(marca, modelo, precio, discoSDD, pulgadas);
  }

  if(oTienda.altaCatalogo(oOrdenador))
  {
    alert("Ordenador registrado.");
    frmAltaCatalogo.reset();
    frmAltaCatalogo.style.display = "none";
  }
  else
  {
    alert("Ordenador registrado previamente.");
  }
}

function aceptarEntradaStock() {
  let marca = frmEntradaStock.txtMarca.value.trim();
  let modelo = frmEntradaStock.txtModelo.value.trim();
  let unidades = parseInt(frmEntradaStock.txtUnidades.value.trim());
  let oOrdenador = oTienda.buscarOrdenador(marca, modelo);
  let oStock = new StockOrdenadores(oOrdenador, unidades);

  if(oTienda.altaStock(oStock))
  {
    alert("Stock registrado.");
    frmEntradaStock.reset();
    frmEntradaStock.style.display = "none";
  }
  else
  {
    alert("Stock registrado previamente.");
  }
}

function aceptarSalidaStock() {
  let marca = frmSalidaStock.txtMarca.value.trim();
  let modelo = frmSalidaStock.txtModelo.value.trim();
  let unidades = parseInt(frmSalidaStock.txtUnidades.value.trim());

  if(oTienda.salidaStock(marca, modelo, unidades))
  {
    alert("Stock Actualizado.");
    frmEntradaStock.reset();
    frmEntradaStock.style.display = "none";
  }
  else
  {
    alert("Stock no existente.");
  }
}

function mostrarListadoCatalogo() {
  let listado = oTienda.listadoCatalogo();
  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write("<h1>Listado</h1>");
  oVentana.document.write(listado);
  oVentana.document.close();
  oVentana.document.title = "Listado Catalogo";
}

function mostrarListadoStock() {
  let listado = oTienda.listadoStock();
  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write("<h1>Listado de Stock</h1>");
  oVentana.document.write(listado);
  oVentana.document.close();
  oVentana.document.title = "Listado Stock";
}

function mostrarTotales() {
  let listado = oTienda.importeTotalStock();
  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write(listado);
  oVentana.document.close();
  oVentana.document.title = "Total Tienda";
}
