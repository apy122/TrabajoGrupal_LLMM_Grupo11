
export function iniciarNavPrincipal() {
    const header = document.createElement("header");
    header.className = "contenedor-titulo";

    const logo = document.createElement("img");
    logo.src = "img/Logo_bitecade.svg";
    logo.alt = "logo_bitecade";
    logo.className = "logo";

    const nombre = document.createElement("p");
    nombre.textContent = "bitecade";
    nombre.id = "bitecade";

    const titulo = document.createElement("h1");
    titulo.textContent = " ";

    // Contenedor superior
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-titulo";
    contenedor.appendChild(nombre);
    contenedor.appendChild(logo);
    contenedor.appendChild(titulo);

    header.appendChild(contenedor);

    // Crear nav
    const nav = document.createElement("nav");
    const links = [
        { nombre: "Home", url: "index.html" },
        { nombre: "Noticias", url: "html/noticias.html" },
        { nombre: "Quienes somos", url: "html/about.html" },
        { nombre: "Publicaciones", url: "html/publicaciones.html" },
        { nombre: "Areas de Actuacion", url: "html/areasActuacion.html" },
        { nombre: "Localizacion", url: "html/localizacion.html" },
        { nombre: "Contacto", url: "html/contacto.html" },
    ];

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

    const menu = document.createElement("button");
    menu.className = "menu";
    menu.textContent = "Menú";
    menu.addEventListener("click", mostrarMenu);

    nav.appendChild(menu);
    nav.appendChild(ul);
    header.appendChild(nav);

    // Insertar al principio del body
    document.body.insertBefore(header, document.body.firstChild);
}

function mostrarMenu() {
    const menu = document.querySelector(".nav-secundario .items");
    if (menu) {
        menu.classList.toggle("mostrar");
    }
}
