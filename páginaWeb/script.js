//Variables no reasignables
const sections = document.querySelectorAll(".content .sidebarselector");
const sidebar = document.querySelectorAll("#sidebarWrap #sidebarcontainer .sidebar");
const subsections = document.querySelectorAll(".content .sidebarsubselector");
const subsidebar = document.querySelectorAll("#sidebarWrap #sidebarcontainer .subsidebar");
const toggleBtn = document.getElementById('sidebarToggleBtn');
const sidebarWrap = document.getElementById('sidebarWrap');

// Cuando haces scroll en la página, se ejecuta la siguiente función
window.onscroll = () => {
    //Variables vácias
    var sectioncurrent = "";
    var subsectioncurrent = "";

    //Por cada sección, se ejecuta la siguiente parte de la función
    sections.forEach((section) => {
        //Variable no reasignable para medir el principio de una sección
        const sectionTop = section.offsetTop;
        //Declaración condicional que solo se ejecuta si hacemos scroll (sobre el eje Y/Vertical) y está 30 píxeles por encima
        if (scrollY >= sectionTop - 30) {
            //Cambia al variable vacía de la sección actual por el id de la sección en la que hacemos scroll
            sectioncurrent = section.getAttribute("id");
        }
    });

    //Por cada objeto de la barra lateral, se ejecuta la siguiente parte de la función
    sidebar.forEach((sidebarItem) => {
        //Quitamos la clase "sidebaractive" a cualquier objeto de la barra lateral que lo pueda tener
        sidebarItem.classList.remove("sidebaractive");
        //Buscamos el objeto de la barra lateral que coincida con la sección en la que estamos haciendo scroll y ejecutamos la parte siguien de la declaración condicional
        if (sidebarItem.classList.contains(sectioncurrent)) {
        //Añadimos la clase "sidebaractive" al objeto en cuestión
        sidebarItem.classList.add("sidebaractive");
        }
    });

    //Variable no reasignable que es conformada por un grupo de elementos que mira si al menos uno de los elementos de la barra lateral contiene la clase "sidebaractive"
    const activeSidebar = Array.from(sidebar).some((sidebarItem) =>
        sidebarItem.classList.contains("sidebaractive")
    );

    //Si no hay ningún elemento en la barra lateral que contenga la clase "sidebaractive", se crea la variable no reasignable que selecciona el elemento con la clase "default"
    if (!activeSidebar) {
        const defaultSidebar = document.querySelector("#sidebarWrap #sidebarcontainer .default");
    //Si se ha creado la variable no reasignable mencionada arriba, le añade a esta la clase "sidebaractive"
    if (defaultSidebar) {
        defaultSidebar.classList.add("sidebaractive");
    }}

    //Por cada subsección, se ejecuta la siguiente parte de la función
    subsections.forEach((subsection) => {
        //Variables no reasignables para medir el principio y el final de una subsección
        const subsectionTop = subsection.offsetTop;
        const subsectionBottom = subsectionTop + subsection.offsetHeight;
        //Si hacemos scroll en una subsección y no esta por debajo del final de esta, cambia la variable vacía de la subsección actual por el id de esta
        if (scrollY >= subsectionTop - 30 && scrollY < subsectionBottom - 30) {
            subsectioncurrent = subsection.getAttribute("id");
        //Si al hacer scroll estamos por debajo del final de la subsección, se reinicia la variable vacía (esto lo uso para quitar el efecto de activo al terminar en una subsección y pasar a la sección nueva)
        } else if (scrollY >= subsectionBottom - 30) {
            subsectioncurrent = "";
            }
        });

    //Por cada objeto de la subbarra lateral, se ejecuta la siguiente parte de la función
    subsidebar.forEach((subsidebarItem) => {
        //Quitamos la clase "subsidebaractive" a cualquier objeto de la subbarra lateral que lo pueda tener
        subsidebarItem.classList.remove("subsidebaractive");
        //Buscamos el objeto de la subbarra lateral que coincida con la subsección en la que estamos haciendo scroll y ejecutamos la parte siguien de la declaración condicional
        if (subsidebarItem.classList.contains(subsectioncurrent)) {
            //Añadimos la clase "subsidebaractive" al objeto en cuestión
            subsidebarItem.classList.add("subsidebaractive");
        }
    });
};

// //Este evento se encarga de que la función de dentro solo se ejecute cuando el documento esta totalmente cargado
// document.addEventListener('DOMContentLoaded', function() {
//     //Variables no reasignables que obtienen los elementos con un Id concreto
//     const toggleBtn = document.getElementById('sidebarToggleBtn');
//     const sidebarWrap = document.getElementById('sidebarWrap');
//     //Solo se ejecuta si ambos elementos (toggleBtn y sidebarWrap) existen en el DOM
//     if (toggleBtn && sidebarWrap) {
//         //Agrega un evento 'click' al botón toggleBtn y cada vez que se haga click en este botón se ejecutará la siguiente función
//         toggleBtn.addEventListener('click', function() {
//             //Alterna las clases "active" y "responsive"
//             sidebarWrap.classList.toggle('active');
//             sidebarWrap.classList.toggle('responsive');
//         })
//     }
// });

function botonresponsive() {
    var x = document.getElementById("sidebarWrap");
    if (x.className === "sidebarWrap") {
      x.className += " responsive";
    } else {
      x.className = "sidebarWrap";
    }
}

function printPage() {
    window.print();
}