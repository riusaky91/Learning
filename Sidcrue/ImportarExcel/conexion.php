<?php
// Conexión a la base de datos MySQL
$servername = "localhost";
$username = "root";
$password = "manager";
$database = "empresa";

// Crear conexión
$mysqli = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($mysqli->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
