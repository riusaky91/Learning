<?php
// Incluir el archivo de conexión a la base de datos
include 'conexion.php';

// Verificar si se envió un archivo
if(isset($_FILES["archivo_csv"]["name"])){
    $ruta_csv = $_FILES["archivo_csv"]["tmp_name"];

    // Abrir el archivo CSV en modo lectura
    if (($handle = fopen($ruta_csv, "r")) !== FALSE) {
        // Comenzar una transacción
        $conn->autocommit(FALSE);

        // Preparar la sentencia SQL para inserción
        $stmt = $conn->prepare("INSERT INTO empleados (nombre, apellido, edad) VALUES (?, ?, ?)");
        //$stmt = $conn->prepare("INSERT INTO `reporte_incidentes`(`secuencia`, `cod_incidente`, `tipo_incidente`, `Nombre del incidente`, `prioridad inicial`, `prioridad final`, `cod_recurso`, `tipo`, `red`, `hora_fecha_inicial`, `hora_fecha_extincid`, `hora_fecha_518`, `hora_fecha_523`, `hora_fecha_518B`, `hora_fecha_523B`, `Tiempo CR508`, `hora_fecha_terminate`, `hora_fecha_cierre`, `cod_cierre_uno`, `cod_cierre_dos`, `cod_cierre_tres`, `cod_cierre_cuatro`, `cod_cierre_final`, `Nombre de cierre final`, `Estado`, `Inc_con_Desp`, `Localidad`, `Zona del incidente`, `X_COORD`, `Y_COORD`, `Circunstancia modificadora`, `Nombre Circunstancia modificadora`, `Dirección`, `Nombre del Llamante`, `Teléfono del Llamante`) VALUES ( ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? )");
        // Enlazar parámetros
        $stmt->bind_param("ssi", $nombre, $apellido, $edad);

        // Leer el archivo CSV e insertar en MySQL
        $firstRowSkipped = false; // Variable para controlar si se ha omitido la primera fila

        // Leer cada línea del archivo CSV e insertar en MySQL
        while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
            // Omitir la primera fila (encabezados de columna)
            if (!$firstRowSkipped) {
                $firstRowSkipped = true;
                continue;
            }

            // Asignar valores a los parámetros
            $nombre = $data[0];
            $apellido = $data[1];
            $edad = $data[2];
            // Ejecutar la sentencia SQL
            $stmt->execute();
        }

        // Confirmar la transacción
        $conn->commit();

        // Cerrar la sentencia preparada
        $stmt->close();

        // Cerrar el archivo CSV
        fclose($handle);

        echo "Los datos se han insertado correctamente.";
    } else {
        echo "No se pudo abrir el archivo CSV.";
    }
} else {
    echo "No se ha enviado ningún archivo CSV.";
}

// Cerrar la conexión
$conn->close();
?>
