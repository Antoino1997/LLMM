document.addEventListener("DOMContentLoaded", function mostrarContenidoEnDiv() {
    const parrafos = document.getElementsByTagName("p");
    const mostrarDiv = document.getElementById("mostrar");

    if (mostrarDiv) {
        var contenido = "";
        for (let i = 0; i < parrafos.length; i++) {
            contenido += parrafos[i].innerHTML + "<br><br>";
        }
        mostrarDiv.innerHTML = contenido;
    }
    });
