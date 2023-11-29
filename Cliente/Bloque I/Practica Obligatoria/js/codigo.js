"use strict";
// Variables globales
let oAgencia = new Agencia();

datosIniciales();

function datosIniciales() {
  // Datos Iniciales de Cliente
  const cliente1 = new Cliente(123456, "Ana", "García López", "agarlóp456");
  const cliente2 = new Cliente(789012, "Juan", "Martínez Rodríguez", "jumartrod012");
  const cliente3 = new Cliente(345678, "María", "Pérez Sánchez", "mapersán678");
  const cliente4 = new Cliente(901234, "Pedro", "González Fernández", "pegonzfer234");

  oAgencia.altaCliente(cliente1);
  oAgencia.altaCliente(cliente2);
  oAgencia.altaCliente(cliente3);
  oAgencia.altaCliente(cliente4);

  // Datos Iniciales de Vehiculos.
  const coche1 = new Coche("ABC-123", "Toyota", "Corolla", "Gasolina", 5);
  const coche2 = new Coche("DEF-456", "Ford", "Fiesta", "Diésel", 4);
  const coche3 = new Coche(" LMN-345", "Tesla", "Model S", "Eléctrico", 5);
  const moto1 = new Moto("GHI-789", "Yamaha", "MT-07", "False");
  const moto2 = new Moto("XYZ-789", "Honda", "CBR500R", "True");
  const moto3 = new Moto("XYZ-779", "Honda", "CAR594R", "False");
  
  oAgencia.altaVehiculo(coche1);
  oAgencia.altaVehiculo(coche2);
  oAgencia.altaVehiculo(coche3);
  oAgencia.altaVehiculo(moto1)
  oAgencia.altaVehiculo(moto2);
  oAgencia.altaVehiculo(moto3);
  
  // Datos Iniciales de Alquileres.
  const alquiler1 = new Alquiler(1, "10/01/2023", "15/01/2023", cliente1, coche1);
  const alquiler2 = new Alquiler(2, "05/02/2023", "12/02/2023", cliente2, coche2);
  const alquiler3 = new Alquiler(3, "20/03/2023", "25/03/2023", cliente3, moto2);
  const alquiler4 = new Alquiler(4, "15/04/2023", "22/04/2023", cliente4, moto2);

  oAgencia.altaAlquiler(alquiler1);
  oAgencia.altaAlquiler(alquiler2);
  oAgencia.altaAlquiler(alquiler3);
  oAgencia.altaAlquiler(alquiler4);
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
  let apellidos = apellido1 + " " + apellido2;
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
    frmAltaVehiculo.reset();
    frmAltaVehiculo.style.display = "none";
  } 
  else 
  {
    alert("Vehiculo con matricula: "+ matricula + " está registrado previamente");
  }
}

function aceptarAltaAlquiler() 
{
  let idAlquiler = parseInt(frmAltaAlquiler.numIdAlquiler.value.trim());
  let cliente = frmAltaAlquiler.txtCliente.value.trim();
  let vehiculo = frmAltaAlquiler.txtVehiculo.value.trim();
  let fechaInicio = new Date(frmAltaAlquiler.altaFechaInicio.value.trim());
  let fechaFin = new Date(frmAltaAlquiler.altaFechaFin.value.trim());

  let oCliente = oAgencia.buscarCliente(cliente);
  
  if (oAgencia.buscarVehiculo(vehiculo) === null)
  {
    alert("Vehiculo no existe");
  }
  else if(fechaInicio > fechaFin)
  {
    alert("La fecha de inicio no puede ser mayor que la fecha de fin");
  }
  else
  {
    let oAlquiler = new Alquiler(idAlquiler, fechaInicio, fechaFin, oCliente, vehiculo);

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
}

function aceptarBajaAlquiler()
{
  let idAlquiler = parseInt(frmBajaAlquiler.numIdAlquiler.value.trim());
  
  if(oAgencia.bajarAlquiler(idAlquiler))
  {
    alert("Alquiler Eliminado");
    frmBajaAlquiler.reset();
    frmBajaAlquiler.style.display = "none";
  }
  else
  {
    alert("El alquiler no existe en la base de datos");
  }
}

function aceptarListadoCliente() 
{
  let listado = oAgencia.listadoCliente();
  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write("<h1>Listado de Clientes</h1>");
  oVentana.document.write(listado);
  oVentana.document.close();
  oVentana.document.title = "Listado Cliente";
}

function aceptarListadoVehiculo()
{
  let listado = oAgencia.listadoVehiculo();
  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write("<h1>Listado de Vehiculo</h1>");
  oVentana.document.write(listado);
  oVentana.document.close();
  oVentana.document.title = "Listado Vehiculo";
}

function aceptarListadoAlquilerPorFecha()
{
  let fechaInicio = frmListadoAlquilerPorFecha.listadoFechaInicio.value.trim();
  let fechaFin = frmListadoAlquilerPorFecha.listadoFechaFin.value.trim();
  let listado = oAgencia.listadoAlquileresFecha(fechaInicio, fechaFin);

  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write("<h1>Listado de Vehiculo Por Fecha</h1>");
  oVentana.document.write(listado);
  oVentana.document.close();
  oVentana.document.title = "Listado alquileres por fecha";

  frmListadoAlquilerPorFecha.reset();
  frmListadoAlquilerPorFecha.style.display = "none";
}

function aceptarListadoAlquilerPorCliente()
{
  let idCliente = frmListadoAlquilerPorCliente.listadoIdCliente.value.trim();
  let listado = oAgencia.listadoAlquileresCliente(idCliente);

  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write("<h1>Listado de Alquiler Por Cliente</h1>");
  oVentana.document.write(listado);
  oVentana.document.close();
  oVentana.document.title = "Listado alquileres por cliente";

  frmListadoAlquilerPorCliente.reset();
  frmListadoAlquilerPorCliente.style.display = "none";
}

function aceptarListadoCocheElectrico()
{
  let listado = oAgencia.listadoCocheElectrico();
  let oVentana = open("", "_blank", "");

  oVentana.document.open();
  oVentana.document.write("<h1>Listado de Coche Electrico</h1>");
  oVentana.document.write(listado);
  oVentana.document.close();
  oVentana.document.title = "Listado Coche Electrico";
}
