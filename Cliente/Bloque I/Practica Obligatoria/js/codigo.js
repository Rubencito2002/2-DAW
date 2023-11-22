"use strict";
// Variables globales
let oAgencia = new Agencia();

datosIniciales();

function datosIniciales() {
  oAgencia.altaCliente(new Cliente(11651, "Pepe", "Perez", "pepe51"));
  oAgencia.altaCliente(new Cliente(17829, "Laura", "Pastrana", "laura29"));
  oAgencia.altaCliente(new Cliente(19235, "Juan", "Machado", "juan35"));

  oAgencia.altaVehiculo(new Vehiculo("ABC123", "Toyota", "Corolla","Gasolina", 5));
  oAgencia.altaVehiculo(new Vehiculo("DEF789", "Yamaha", "YZF-R3", true));
  oAgencia.altaVehiculo(new Vehiculo("XYZ456", "Honda", "Civic", "Gasolina", 4));
  oAgencia.altaVehiculo(new Vehiculo("MTO567", "Honda", "CBR500R", false));

  oAgencia.altaAlquiler(new Alquiler(1, "pepe51", "ABC123", "15/02/2023", "20/05/2023"));
  oAgencia.altaAlquiler(new Alquiler(2, "laura29", "XYZ456", "01/06/2023", "15/08/2023"));
  oAgencia.altaAlquiler(new Alquiler(3, "juan35", "MTO567", "10/09/2023", "31/12/2023"));
}

// Gestión de formularios
function gestionFormularios(sFormularioVisible) 
{
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) {
    case "frmAltaCliente":
      frmAltaCliente.style.display = "block";
      break;
    case "frmAltaVehiculo":
      frmAltaVehiculo.style.display = "block";
      break;
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
      alert("Hay " + oAgencia.totalArbolesVenta() + " árboles a la venta");
      break;
  }
}

