function eliminarlista() {
    const lista = document.getElementById("milista");

    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }
}