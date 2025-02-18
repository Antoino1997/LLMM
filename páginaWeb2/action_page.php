<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario</title>
    <link rel="stylesheet" href="https://cdn.lineicons.com/5.0/lineicons.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8 formulariophp">
                <?php
                // Configurar la carpeta de destino
                $carpetaDestino = "uploads/";

                // Verificar si la carpeta existe
                if (!is_dir($carpetaDestino)) {
                    // Si no existe, crearla con permisos 0777 (lectura, escritura y ejecución)
                    mkdir($carpetaDestino, 0777, true);
                }

                // Función para limpiar y validar cadenas
                function validarCadena($cadena) {
                    $cadena = trim($cadena);
                    $cadena = stripslashes($cadena);
                    $cadena = htmlspecialchars($cadena);
                    return $cadena;
                }

                // Variables para almacenar los datos del formulario
                $nombre = "";
                $apellidos = "";
                $dni = "";
                $contraseña = "";
                $sexo = "";
                $provincia = "";
                $dia = "";
                $mes = "";
                $año = "";
                $email = "";
                $rutaDestino = ""; // Inicializar la variable

                // Verificar si se han enviado los datos por POST
                if ($_SERVER["REQUEST_METHOD"] == "POST") {

                    $nombre = validarCadena($_POST["nombre"]);
                    $apellidos = validarCadena($_POST["apellidos"]);
                    $dni = validarCadena($_POST["dni"]);
                    $contraseña = validarCadena($_POST["contraseña"]);
                    $sexo = validarCadena($_POST["sexo"]);
                    $provincia = validarCadena($_POST["provincia"]);
                    $dia = validarCadena($_POST["dia"]);
                    $mes = validarCadena($_POST["mes"]);
                    $año = validarCadena($_POST["año"]);
                    $email = validarCadena($_POST["email"]);


                    if (isset($_FILES["foto"]) && $_FILES["foto"]["error"] == 0) {
                        // Procesar el archivo subido
                        $nombreArchivo = $_FILES["foto"]["name"];
                        $rutaTemporal = $_FILES["foto"]["tmp_name"];
                        $rutaDestino = $carpetaDestino . basename($nombreArchivo);

                        // Mover el archivo a la carpeta destino
                        if (!move_uploaded_file($rutaTemporal, $rutaDestino)) {
                            echo "<div class='alert alert-danger' role='alert'>Error al subir la imagen.</div>";
                        }
                    } else if (isset($_FILES["foto"]) && $_FILES["foto"]["error"] != 4) { // Si hay error pero no es "no se subió archivo"
                        echo "<div class='alert alert-danger' role='alert'>Error en la subida de la imagen. Código de error: " . $_FILES["foto"]["error"] . "</div>";
                    }
                }
                ?>
                <p>Bienvenido, usuario:
                    <?php echo "<b>" . $nombre . " " . $apellidos . "</b>"; ?>
                </p>
                <p>Su DNI es:
                    <?php echo "<b>" . $dni . "</b>"; ?></p>
                <p>Su contraseña es:
                    <?php echo "<b>" . $contraseña . "</b>"; ?></p>
                <p>Usted es:
                    <?php echo "<b>" . $sexo . "</b>"; ?></p>
                <p>Usted es de:
                    <?php echo "<b>" . $provincia . "</b>"; ?></p>
                <p>Su fecha de nacimiento es:
                    <?php
                    echo "<b>" . $dia . " de " . $mes . " de " . $año . "</b>";
                    ?>
                <p>Su email es:
                    <?php
                    echo "<b>" . $email . "</b>";
                    ?>
                </p>
                <?php
                // Mostrar la foto si se subió correctamente
                if ($rutaDestino != "") {
                    echo "<p>Su foto:</p>";
                    echo "<img src='" . $rutaDestino . "' alt='Foto del usuario'>";
                }
                ?>
           </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>
</html>