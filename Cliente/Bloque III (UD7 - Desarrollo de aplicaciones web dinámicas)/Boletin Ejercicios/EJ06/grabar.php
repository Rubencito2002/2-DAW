<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "bdpersonas";

$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$edad = $_POST['edad'];


if ($nombre === '' || $apellidos === '' || $edad === ''){
  echo json_encode('error');

} else {

  // Create connection
  $conn = mysqli_connect($servername, $username, $password, $basedatos);

  // Check connection
  if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
  }

  $sql = "INSERT INTO alumno (nombre, apellidos, edad)
  VALUES ('$nombre', '$apellidos', '$edad')";


  if (mysqli_query($conn, $sql)) {
    echo json_encode ('Registro grabado correctamente en la BD: ' . $nombre . ' '  . $apellidos . ' ' . $edad . ' años');
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }

  $conn->close();
  }
?>