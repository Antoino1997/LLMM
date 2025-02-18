// Espera a que el contenido del documento HTML se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Se define un array con los nombres de las provincias de España
    const provincias = ["A Coruña", "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz",
        "Baleares", "Barcelona", "Burgos", "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ciudad Real",
        "Córdoba", "Cuenca", "Girona", "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Jaén",
        "La Rioja", "Las Palmas", "León", "Lleida", "Lugo", "Madrid", "Málaga", "Murcia", "Navarra",
        "Ourense", "Palencia", "Pontevedra", "Salamanca", "Segovia", "Sevilla", "Soria", "Tarragona",
        "Santa Cruz de Tenerife", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora",
        "Zaragoza", "Ceuta", "Melilla"
    ];

    // Obtiene el elemento 'select' con el id 'provincia', donde se añadirán las opciones
    const selectProvincia = document.getElementById('provincia');

    // Recorre el array de provincias y por cada provincia crea una nueva opción (option) dentro del 'select'
    provincias.forEach(provincia => {
        const option = document.createElement('option');  // Crea un nuevo elemento <option>
        option.value = provincia;  // Establece el valor del 'option' como el nombre de la provincia
        option.text = provincia;   // Establece el texto visible del 'option' como el nombre de la provincia
        selectProvincia.appendChild(option);  // Añade la opción creada al elemento <select> con id 'provincia'
    });
});

// Función para mostrar u ocultar la contraseña
function mostrarcontraseña() {
    var x = document.getElementById("contraseña"); // Obtiene el input con id 'contraseña'
    
    // Si el tipo de input es 'password', lo cambia a 'text' para mostrar la contraseña
    if (x.type === "password") {
        x.type = "text";  // Muestra la contraseña
    } else {
        x.type = "password";  // Vuelve a ocultar la contraseña
    }
};