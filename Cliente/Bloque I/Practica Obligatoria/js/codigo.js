"use strict";
// Variables globales
let oCliente = new Cliente();
let oAlquiler = new Alquiler();
let oVehiculo = new Vehiculo();

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
    case "frmAltaCliente":
      frmAltaCliente.style.display = "block";
      break;
    case "frmAltaVehiculo":
      frmAltaVehiculo.style.display = "block";
      break;
    case "frmAltaAlquiler":
      frmAltaAlquiler.style.display = "block";
      break;
    case "frmBajaAlquiler":
      frmBajaAlquiler.style.display = "block";
      break;
    case "frmListadoCliente":
      frmListadoCliente.style.display = "block";
      break;
    case "frmListadoVehiculo":
      frmListadoVehiculo.style.display = "block";
      break;
    case "frmListadoAlquilerPorFecha":
      frmListadoAlquilerPorFecha.style.display = "block";
      break;
    case "frmListadoAlquilerPorCliente":
      frmListadoAlquilerPorCliente.style.display = "block";
      break;
    case "frmListadoCochesElectrico":
      frmListadoCochesElectrico.style.display = "block";
      break;
  }
}

function ocultarTodosLosFormularios() 
{
  let oFormularios = document.querySelectorAll("form");

  for (let i = 0; i < oFormularios.length; i++) 
  {
    oFormularios[i].style.display = "none";
  }
}

// AceptarAltaCliente
function AceptarAltaCliente() 
{
  let dniCliente = parseInt(frmAltaCliente.txtDNI.value.trim());
  let nombre = frmAltaCliente.txtNombre.value.trim();
  let apellido1 = frmAltaCliente.txtApellido1.value.trim();
  let apellido2 = frmAltaCliente.txtApellido2.value.trim();
  let usuario = generarUsuario(dniCliente, nombre, apellido1, apellido2);
  let apellidos = apellido1 + apellido2;
  let oCliente = new Cliente(dniCliente, nombre, apellidos, usuario);

  // Insertar el nuevo árbol
  if (oCliente.altaCliente(oCliente)) 
  {
    alert("Cliente registrado OK");
    frmAltaCliente.reset();
    frmAltaCliente.style.display = "none";
  } 
  else 
  {
    alert("Cliente registrado previamente");
  }
}

function generarUsuario(dniCliente, nombre, apellido1, apellido2)
{
  const inicialNombre = nombre.charAt(0).toLowerCase();
  const tresLetrasApellido1 = apellido1.slice(0, 3).toLowerCase();
  const tresLetrasApellido2 = apellido2.slice(0, 3).toLowerCase();
  const tresUltimosDigitosDNI = dniCliente.slice(-3);

  return inicialNombre + tresLetrasApellido1 + tresLetrasApellido2 + tresUltimosDigitosDNI;
}

function aceptarAltaVehiculo() 
{

}

function aceptarListadoPerennes() 
{
  
}

function aceptarListadoCaducos() 
{
  
}
