"use strict";
// Variables globales
let oAgencia = new Agencia();
/*
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
*/
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
function aceptarAltaCliente() 
{
  let dniCliente = parseInt(frmAltaCliente.txtDNI.value.trim());
  let nombre = frmAltaCliente.txtNombre.value.trim();
  let apellido1 = frmAltaCliente.txtApellidos1.value.trim();
  let apellido2 = frmAltaCliente.txtApellidos2.value.trim();

  let usuario = generarUsuario(dniCliente, nombre, apellido1, apellido2);
  let apellidos = apellido1 + apellido2;
  let oCliente = new Cliente(dniCliente, nombre, apellidos, usuario);

  if (oAgencia.altaCliente(oCliente)) 
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
  const tresUltimosDigitosDNI = String(dniCliente).slice(-3);

  return inicialNombre + tresLetrasApellido1 + tresLetrasApellido2 + tresUltimosDigitosDNI;
}

function aceptarAltaVehiculo() 
{
  let matricula = frmAltaVehiculo.txtMatricula.value.trim();
  let marca = frmAltaVehiculo.txtMarca.value.trim();
  let modelo = frmAltaVehiculo.txtModelo.value.trim();
  let tipoVehiculo = frmAltaVehiculo.rbtTipoVehiculo.value;
  let ciclomotor;
  let combustible = frmAltaVehiculo.txtCombustible.value.trim();
  let plaza = parseInt(frmAltaVehiculo.intPlazas.value.trim());
  let oVehiculo;

  if(tipoVehiculo === "Moto")
  {
    if(frmAltaVehiculo.value === True)
    {
      ciclomotor = True;
      oVehiculo = new Moto(matricula, marca, modelo, ciclomotor);
    }
    else
    {
      ciclomotor = False;
      oVehiculo = new Moto(matricula, marca, modelo, ciclomotor);
    }
  }
  else
  {
    oVehiculo = new Coche(matricula, marca, modelo, combustible, plaza);
  }

  if (oAgencia.altaVehiculo(oVehiculo)) 
  {
    alert("Vehiculo registrado OK");
  } 
  else 
  {
    alert("Vehiculo con matricula: "+ matricula + " está registrado previamente");
  }

  frmAltaVehiculo.reset();
  frmAltaVehiculo.style.display = "none";
}

function aceptarAltaAlquiler() 
{
  let idAlquiler = parseInt(frmAltaAlquiler.numIdAlquiler.value.trim());
  let cliente = frmAltaAlquiler.txtCliente.value.trim();
  let vehiculo = frmAltaAlquiler.txtVehiculo.value.trim();
  let fechaInicio = frmAltaAlquiler.altaFechaInicio.value.trim();
  let fechaFin = frmAltaAlquiler.altaFechaFin.value.trim();
  let oAlquiler = new Alquiler(idAlquiler, cliente, vehiculo, fechaInicio, fechaFin);

  if (oAgencia.altaAlquiler(oAlquiler)) 
  {
    alert("Alquiler registrado OK");
    frmAltaAlquiler.reset();
    frmAltaAlquiler.style.display = "none";
  } 
  else 
  {
    alert("Alquiler registrado previamente");
  }
}

function aceptarListadoCaducos() 
{
  
}
