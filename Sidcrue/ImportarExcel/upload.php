<?php

// Incluir el archivo de configuración de la base de datos
require_once 'conexion.php';

// Verificar si se ha enviado un archivo
if(isset($_FILES["archivo_excel"]["name"])) {
    // Obtener el archivo subido
    $archivo_excel = $_FILES["archivo_excel"];

    // Verificar si hay errores en la subida
    if ($archivo_excel['error'] !== UPLOAD_ERR_OK) {
        die("Error al cargar el archivo: " . $archivo_excel['error']);
    }

    // Validar el tipo de archivo
    $archivo_tipo = mime_content_type($archivo_excel['tmp_name']);
    if ($archivo_tipo != 'application/vnd.ms-excel' && $archivo_tipo != 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        die("Tipo de archivo no admitido: " . $archivo_tipo);
    }

    // Incluir la autoloader de Composer
    require 'vendor/autoload.php';

    // Crear un nuevo objeto PhpSpreadsheet
    $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($archivo_excel['tmp_name']);

    // Obtener la hoja activa del archivo Excel
    $worksheet = $spreadsheet->getActiveSheet();

    // Preparar la consulta para inserción de datos
    $sql = "INSERT INTO empleados (nombre, apellido, edad) VALUES (?, ?, ?)";
    $stmt = $mysqli->prepare($sql);

    // Verificar la preparación de la consulta
    if (!$stmt) {
        die("Error al preparar la consulta: " . $mysqli->error);
    }

    // Iterar sobre las filas del archivo Excel
    foreach ($worksheet->getRowIterator() as $row) {
        $values = array();
        // Obtener las celdas de la fila actual
        foreach ($row->getCellIterator() as $cell) {
            $values[] = $cell->getValue();
        }

        // Bindear los valores y ejecutar la consulta
        $stmt->bind_param('sss', ...$values);
        if (!$stmt->execute()) {
            die("Error al insertar datos: " . $stmt->error);
        }
    }

    // Cerrar la declaración preparada
    $stmt->close();

    echo "Carga de archivo Excel completada exitosamente.";
} else {
    echo "No se ha enviado ningún archivo.";
}
?>