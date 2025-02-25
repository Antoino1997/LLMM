document.addEventListener("DOMContentLoaded", function mostrarContenido() {
    const titulo = document.createElement("h1");
    const enlace = document.createElement("a");
    const imagen = document.createElement("img");
    const br = document.createElement("br");
    titulo.innerHTML = "Titulo";
    enlace.href = "#";
    enlace.innerHTML = "Enlace 1";
    imagen.src = "coche1.webp";
    imagen.style.width = "20%";
    imagen.style.height = "20%";
    document.getElementById("cuerpo").append(titulo, imagen, br, enlace);
    });