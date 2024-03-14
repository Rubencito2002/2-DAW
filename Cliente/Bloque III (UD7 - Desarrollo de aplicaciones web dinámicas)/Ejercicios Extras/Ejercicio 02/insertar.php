<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "bdcoches";
$marca = $_POST['marca'];
$modelo = $_POST['modelo'];
$kilometros = $_POST['kilometros'];
$matricula = $_POST['matricula'];

$conn = mysqli_connect($servername, $username, $password, $basedatos);

  // Check connection
if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

$sql = "INSERT INTO coche (marca, modelo, matricula, kilometros) VALUES ('$marca', '$modelo', '$matricula', '$kilometros')";


if (mysqli_query($conn, $sql)) {
    echo json_encode ('Registro insertado correctamente en la BD');
  } else {
    echo json_encode ('Error');
  }

  $conn->close();

?>