<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "bdpersonas";
$edad = $_POST['edad'];

try {
  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT * FROM alumno WHERE edad >= $edad");
  $stmt->execute();

  echo JSON_ENCODE($stmt->fetchAll());

  
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$conn = null;
?>