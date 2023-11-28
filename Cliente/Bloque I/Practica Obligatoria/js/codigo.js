"use strict";
// Variables globales
let oAgencia = new Agencia();

datosIniciales();

function datosIniciales() {
  // Datos Iniciales de Cliente
  const cliente1 = new Cliente(123456, "Ana", "García", "López");
  const cliente2 = new Cliente(789012, "Juan", "Martínez", "Rodríguez");
  const cliente3 = new Cliente(345678, "María", "Pérez", "Sánchez");
  const cliente4 = new Cliente(901234, "Pedro", "González", "Fernández");

  oAgencia.altaCliente(cliente1);
  oAgencia.altaCliente(cliente2);
  oAgencia.altaCliente(cliente3);
  oAgencia.altaCliente(cliente4);

  // Datos Iniciales de Vehiculos.
  const vehiculo1 = new Coche("ABC-123", "Toyota", "Corolla", "Gasolina", 5);
  const vehiculo2 = new Coche("DEF-456", "Ford", "Fiesta", "Diésel", 4);
  const vehiculo3 = new Moto("GHI-789", "Yamaha", "MT-07", "False");
  const vehiculo4 = new Moto("XYZ-789", "Honda", "CBR500R", "True");
  
  oAgencia.altaVehiculo(vehiculo1);
  oAgencia.altaVehiculo(vehiculo2);
  oAgencia.altaVehiculo(vehiculo3)
  oAgencia.altaVehiculo(vehiculo4);
  
  // Datos Iniciales de Alquileres.
  oAgencia.altaAlquiler(new Alquiler(1, "10/01/23", "15/01/23", [vehiculo1], cliente1));
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
  let fechaInicio = new Date(frmAltaAlquiler.altaFechaInicio.value.trim());
  let fechaFin = new Date(frmAltaAlquiler.altaFechaFin.value.trim());
  let oAlquiler = new Alquiler(idAlquiler, fechaInicio, fechaFin, cliente, [vehiculo]);

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

function aceptarListadoCliente() 
{
  
}

function aceptarListadoVehiculo()
{

}

function aceptarListadoAlquilerPorFecha()
{
  let fechaInicio = frmListadoAlquilerPorFecha.listadoFechaInicio.value.trim();
  let fechaFin = frmListadoAlquilerPorFecha.listadoFechaFin.value.trim();
  let listado = oAgencia.listadoAlquileres(fechaInicio, fechaFin);

  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write("<h1>Listado de Vehiculo Por Fecha");
  oVentana.document.write(listado);
  oVentana.document.close();
  oVentana.document.title = "Listado alquileres por fecha";

  frmListadoAlquilerPorFecha.reset();
  frmListadoAlquilerPorFecha.style.display = "none";
}

function aceptarListadoAlquilerPorCliente()
{

}

function aceptarListadoCocheElectrico()
{

}
