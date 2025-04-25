//Secciones principales de la pagina
const header = document.createElement("header");
const nav = document.createElement("nav");
const main = document.createElement("main");
const footer = document.createElement("footer");

//links del nav
links=[
    {nombre:"Home", url:"index.html"},
    {nombre:"Noticias", url:"noticias.html"},
    {nombre:"Quienes somos", url:"about.html"},
    {nombre:"publicaciones", url:"publicaciones.html"},
    {nombre:"Areas de Actuacion", url:"areasActuacion.html"},
    {nombre:"Contacto", url:"contacto.html"},
]

//crea el header
function crearHeader() {
    const aside = document.createElement("aside");
    
    //inserta elementos al header la funcion nav y elementos
    header.appendChild(crearNav());
    header.appendChild();
};

//crea el nav
function crearNav() {
   
    return nav;
};

//crea el main
function crearMain() {
    const section = document.createElement("section");
    const aside = document.createElement("aside");
    const article = document.createElement("article");
};

//crea el footer
function crearFooter() {

    footer.appendChild();
};

//une todo al body
function armarPagina() {
    document.body.appendChild(header);
    document.body.appendChild(nav);
    document.body.appendChild(main);
};

//ejecuta funciones y Doom
document.addEventListener("DOMContentLoaded", function(){
    crearHeader();
    crearMain();
    crearFooter();
    armarPagina();
});