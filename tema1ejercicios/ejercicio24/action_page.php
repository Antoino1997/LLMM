<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario</title>
</head>
<body>   
<?php
// Configurar la carpeta de destino
$carpetaDestino = "uploads/";

// Verificar si la carpeta existe
if (!is_dir($carpetaDestino)) {
    // Si no existe, crearla con permisos 0777 (lectura, escritura y ejecución)
    mkdir($carpetaDestino, 0777, true);
}

if (isset($_FILES["foto"])) {
    // Procesar el archivo subido
    $nombreArchivo = $_FILES["foto"]["name"];
    $rutaTemporal = $_FILES["foto"]["tmp_name"];
    $rutaDestino = $carpetaDestino . basename($nombreArchivo);

    // Mover el archivo a la carpeta destino
    move_uploaded_file($rutaTemporal, $rutaDestino);
}
?>

<p>Bienvenido, usuario: 
<?php echo "<b>" . $_POST["nombre"] . " " . $_POST["apellidos"] . "</b>"; ?>
</p>
<p>Su DNI es:
<?php echo "<b>" . $_POST["dni"] . "</b>"; ?></p>
<p>Su contraseña es: 
<?php echo "<b>" . $_POST["contraseña"] . "</b>"; ?></p>
<p>Usted es:
<?php echo "<b>" . $_POST["sexo"] . "</b>"; ?></p>

<?php
// Mostrar la foto si se subió correctamente
if (isset($rutaDestino)) {
    echo "<p>Su foto:</p>";
    echo "<img src='" . $rutaDestino . "' alt='Foto del usuario' style='max-width: 300px; height: auto;'>";
}
?>
</body>
</html>
