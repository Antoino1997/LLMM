<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario</title>
</head>
<body>   
<?php
// Procesar el archivo subido
if (isset($_FILES["foto"])) {
    // Mover el archivo a la carpeta destino sin validaciones
    $nombreArchivo = $_FILES["foto"]["name"];
    $rutaTemporal = $_FILES["foto"]["tmp_name"];
    $carpetaDestino = "uploads/";
    $rutaDestino = $carpetaDestino . basename($nombreArchivo);
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