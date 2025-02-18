// Espera a que el contenido del documento HTML se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Se obtienen los elementos del DOM que se usarán más adelante
    const hamburguesilla = document.getElementById('toggle-btn'); // Botón para mostrar/ocultar el menú
    const sidebar = document.getElementById('sidebar'); // Barra lateral (sidebar)
    const recetasLink = document.querySelector('.sidebar-link[data-bs-target="#recetas"]'); // Enlace de recetas dentro de la barra lateral
    const recetasDropdown = document.querySelector('#recetas'); // Contenedor del dropdown de recetas

    // Función que verifica el tamaño de la pantalla para mostrar/ocultar elementos
    function checkScreenSize() {
        const screenWidth = window.innerWidth; // Obtiene el ancho actual de la ventana

        // Si el ancho de la pantalla es menor o igual a 768px, oculta el enlace de "recetas"
        if (screenWidth <= 768) {
            recetasLink.style.display = 'none'; // Oculta el enlace de recetas
        } else {
            recetasLink.style.display = 'block'; // Muestra el enlace de recetas
        }

        // Si el ancho de la pantalla es menor o igual a 768px, elimina la clase 'expand' de la barra lateral
        if (screenWidth <= 768) {
            sidebar.classList.remove('expand');
        } else if (!sidebar.classList.contains('expand')) {
            // Si la barra lateral no tiene la clase 'expand', oculta el dropdown de recetas utilizando Bootstrap Collapse
            const recetasCollapse = new bootstrap.Collapse(recetasDropdown, { toggle: false });
            recetasCollapse.hide(); // Oculta el dropdown
        }
    }

    // Añade un evento para cuando se cambia el tamaño de la ventana, llamando a la función checkScreenSize
    window.addEventListener('resize', checkScreenSize);

    // Llama a la función checkScreenSize al cargar la página para asegurar que el tamaño se revisa inicialmente
    checkScreenSize();

    // Cuando se hace clic en el botón de hamburguesa (menú), ejecuta la siguiente acción
    hamburguesilla.addEventListener('click', function() {
        // Si el tamaño de la ventana es menor o igual a 768px, redirige a "index.html"
        if (window.innerWidth <= 768) {
            window.location.href = "../index.html"; // Redirige a la página de inicio
        } else {
            // Si la barra lateral no está expandida, alterna la clase 'expand' en la barra lateral
            sidebar.classList.toggle('expand');
            
            // Si la barra lateral se colapsa, oculta el dropdown de recetas
            if (!sidebar.classList.contains('expand')) {
                const recetasCollapse = new bootstrap.Collapse(recetasDropdown, { toggle: false });
                recetasCollapse.hide(); // Oculta el dropdown
            }
        }
    });

    // Cuando se hace clic en el enlace de recetas en la barra lateral
    recetasLink.addEventListener('click', function(event) {
        // Si la barra lateral no está expandida, impide que el enlace sea seguido
        if (!sidebar.classList.contains('expand')) {
            event.preventDefault(); // Evita que se ejecute la acción por defecto (navegar al enlace)
            return;
        }
    });

    // Cuando el dropdown de recetas intenta mostrarse
    recetasDropdown.addEventListener('show.bs.collapse', function(event) {
        // Si la barra lateral no está expandida, impide que el dropdown se muestre
        if (!sidebar.classList.contains('expand')) {
            event.preventDefault(); // Impide que el dropdown se muestre
        }
    });
});