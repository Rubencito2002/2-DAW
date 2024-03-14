<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "bdcoches";
$matricula = $_POST['matricula'];

$conn = mysqli_connect($servername, $username, $password, $basedatos);

  // Check connection
if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

$sql = "DELETE FROM coche WHERE matricula = '$matricula'";


if (mysqli_query($conn, $sql)) {
    echo json_encode ('Registro borrado correctamente en la BD');
  } else {
    echo json_encode ('Error: ' . $sql . '<br>' . mysqli_error($conn));
  }

  $conn->close();

?>