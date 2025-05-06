export function iniciarNavSecundario() {
    const header = document.querySelector("header");
    const logo = document.createElement("img");
    logo.src = "../img/logo_bitecade.svg";
    logo.alt = "logo_bitecade";
    logo.className = "logo";

    const nombre = document.createElement("p");
    nombre.textContent = "bitecade";
    nombre.id = "bitecade";

    const titulo = document.createElement("h1");
    titulo.textContent = " ";

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-titulo";
    contenedor.appendChild(nombre);
    contenedor.appendChild(logo);
    contenedor.appendChild(titulo);

    header.appendChild(contenedor);
    
    const nav = document.createElement("nav");
    nav.className = "nav-secundario";

    const links = [
        { nombre: "Home", url: "../index.html" },
        { nombre: "Noticias", url: "../html/noticias.html" },
        { nombre: "Quienes somos", url: "../html/about.html" },
        { nombre: "Publicaciones", url: "../html/publicaciones.html" },
        { nombre: "Areas de Actuación", url: "../html/areasActuacion.html" },
        { nombre: "Localización", url: "../html/localizacion.html" },
        { nombre: "Contacto", url: "../html/contacto.html" },
    ];

    // Botón de menú
    const menu = document.createElement("button");
    menu.className = "menu";
    menu.textContent = "Menú";
    menu.addEventListener("click", () => {
        ul.classList.toggle("mostrar");
    });

    const ul = document.createElement("ul");
    ul.className = "items";

    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.nombre;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(menu);
    nav.appendChild(ul);

    // Insertar después del header existente
    if (header) {
        header.insertAdjacentElement("afterend", nav);
    } else {
        console.warn("No se encontró el elemento <header> para insertar el nav secundario.");
        document.body.insertBefore(nav, document.body.firstChild);
    }
}
function mostrarMenu() {
    const menu = document.querySelector(".nav-secundario .items");
    if (menu) {
        menu.classList.toggle("mostrar");
    }
}
