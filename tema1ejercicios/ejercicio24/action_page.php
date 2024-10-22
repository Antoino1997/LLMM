<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>   
<p>Bienvenido, usuario: 
<?php echo "<b>".$_GET["nombre"]."</b>";?><?php echo "<b>".$_GET["apellidos"]."</b>";?>
</p>
<p>Su DNI es:
<?php echo "<b>".$GET["DNI"]."</b>";?></p>
<p>Tu clave es: 
<?php echo "<b>".$_GET["contraseña"]."</b>";?></p>
<p>Usted es:
<?php echo "<b>".$_GET["sexo"]."</b>";?></p>
<p>Su foto:
<?php echo "<b>".$_GET["FOTO"]."</b>";?></p>
</body>
</html>