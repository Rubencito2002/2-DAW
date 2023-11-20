"use strict";
// Variables globales
let oVivero = new Vivero();

datosIniciales();

function datosIniciales() {
  oVivero.altaArbol(new Perenne(1, 100, "Olivo", true));
  oVivero.altaArbol(new Caduco(2, 78, "Melocotonero", "abril"));
  oVivero.altaArbol(new Perenne(3, 50, "Ciprés", false));
  oVivero.altaArbol(new Perenne(4, 75, "Pino piñonero", true));
  oVivero.altaArbol(new Caduco(5, 81, "Melocotonero", "abril"));
  oVivero.altaArbol(new Caduco(6, 110, "Manzano", "mayo"));
  oVivero.altaArbol(new Perenne(7, 80, "Cedro", false));
  oVivero.altaArbol(new Caduco(8, 67, "Naranjo", "marzo"));
  oVivero.altaArbol(new Perenne(9, 90, "Alcornoque", true));
  oVivero.altaArbol(new Caduco(10, 70, "Peral", "marzo"));
}

// Gestión de formularios
function gestionFormularios(sFormularioVisible) {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) {
    case "frmAltaArbol":
      frmAltaArbol.style.display = "block";
      break;
    case "frmTallaje":
      frmTallaje.style.display = "block";
      break;
    case "frmListadoPerennes":
      frmListadoPerennes.style.display = "block";
      break;
    case "frmListadoCaducos":
      frmListadoCaducos.style.display = "block";
      break;
    case "TotalArboles":
      alert("Hay " + oVivero.totalArbolesVenta() + " árboles a la venta");
      break;
  }
}

function mostrarAltaArbol() {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario
  frmAltaArbol.style.display = "block";
}

function ocultarTodosLosFormularios() {
  let oFormularios = document.querySelectorAll("form");

  for (let i = 0; i < oFormularios.length; i++) {
    oFormularios[i].style.display = "none";
  }
}

// aceptarAltaArbol
function aceptarAltaArbol() {
  // Insertar el nuevo árbol
  if (oVivero.altaArbol(oArbol)) {
    alert("Arbol registrado OK");
    frmAltaArbol.reset(); // Vaciamos los campos del formulario
    frmAltaArbol.style.display = "none";
  } else {
    alert("Arbol registrado previamente");
  }
}

function aceptarTallaje() {
  let sRespuesta =
    /*Llamada a tallajeArbol*/

    alert(sRespuesta);

  if (sRespuesta.includes("Correcto") > 0) {
    frmTallaje.reset();
    frmTallaje.style.display = "none";
  }
}

function aceptarListadoPerennes() {
  //Crear el listado

  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write(
    "<h1>Listado de árboles perennes de altura mínima: " + iAlturaMinima + " cm</h1>"
  );
  oVentana.document.write(/*Listado a mostrar*/);
  oVentana.document.close();
  oVentana.document.title = "Listado perennes";

  // Reseteamos y ocultamos el formulario
  frmListadoPerennes.reset();
  frmListadoPerennes.style.display = "none";
}

function aceptarListadoCaducos() {
  //Crear el listado

  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write(
    "<h1>Listado de árboles caducos con floración el mes: " + sMesFloracion + "</h1>"
  );
  oVentana.document.write(/*listado a mostrar*/);
  oVentana.document.close();
  oVentana.document.title = "Listado caducos";

  // Reseteamos y ocultamos el formulario
  frmListadoCaducos.reset();
  frmListadoCaducos.style.display = "none";
}
