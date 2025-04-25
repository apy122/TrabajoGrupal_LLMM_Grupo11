//Secciones principales de la pagina
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

//crea el header
function crearHeader() {
    const titulo = document.createElement("h1");
    titulo.textContent = "Mi Pagina Web";
    header.appendChild(titulo);
    return header;
}

//crea el main
function crearMain() {
    return main;
};

//crea el footer
function crearFooter() {
    return footer;
};

//une todo al body
export function armarPagina() {
    crearHeader();
    crearMain();
    crearFooter();
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
};