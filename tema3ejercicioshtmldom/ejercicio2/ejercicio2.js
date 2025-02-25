function crearImgEnDiv() {
    const img = document.createElement("img")
    img.src = "coche1.webp";
    img.style.width = "30%";
    img.style.height = "30%";
    document.getElementById("mostrar").appendChild(img);
}