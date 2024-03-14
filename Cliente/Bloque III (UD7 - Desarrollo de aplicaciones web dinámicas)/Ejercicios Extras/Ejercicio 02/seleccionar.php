<?php
$servername = "localhost";
$username = "root";
$password = "";
$basedatos = "bdcoches";
$kilometros = $_POST['kilometros'];

try {
  $conn = new PDO("mysql:host=$servername;dbname=$basedatos", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT * FROM coche WHERE kilometros <= $kilometros");
  $stmt->execute();

  echo JSON_ENCODE($stmt->fetchAll());

  
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$conn = null;
?>