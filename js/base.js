//Secciones principales de la pagina
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

//crea el header
function crearHeader() {
    const titulo = document.createElement("h1");
    titulo.textContent = " "; // Puedes personalizar por página también
    header.appendChild(titulo);
    return header;
}

//crea el main
function crearMain() {
    return main;
};

//crea el footer
function crearFooter() {
    const parrafo= document.createElement("p");
    parrafo.textContent="Trabajo LLMM 2025";
    footer.appendChild(parrafo);
    return footer;
};

//une todo al body
function armarPagina() {
    crearHeader();
    crearMain();
    crearFooter();
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
};

//ejecuta funciones y Doom
document.addEventListener("DOMContentLoaded", function(){
    armarPagina();
});