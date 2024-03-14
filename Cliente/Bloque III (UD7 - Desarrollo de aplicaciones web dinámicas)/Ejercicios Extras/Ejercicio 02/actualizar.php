<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "bdcoches";
$kilometros = $_POST['kilometros'];
$matricula = $_POST['matricula'];

$conn = mysqli_connect($servername, $username, $password, $basedatos);

  // Check connection
if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

$sql = "UPDATE coche SET kilometros = '$kilometros' WHERE matricula = '$matricula'";


if (mysqli_query($conn, $sql)) {
    echo json_encode ('Registro grabado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }

  $conn->close();

?>