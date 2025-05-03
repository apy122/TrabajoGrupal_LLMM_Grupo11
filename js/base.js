//Secciones principales de la pagina
export function elementos() {
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
    return { header, main, footer };
}

//crea el header
export function crearHeader(header) {
    //crear contenedor general
    const contenedor= document.createElement("div");
    contenedor.className = "contenedor-titulo";

    //crear titulo general
    const titulo= document.createElement("h1");
    titulo.textContent = " ";

    //unir todo
    contenedor.appendChild(titulo);
    header.appendChild(contenedor);

    //retornar elementos
    return { contenedor, titulo };
}

//crea el main
export function crearMain(main) {
    //crear elementos
    const seccion= document.createElement("section");
    const headerInterno= document.createElement("header")
    const articulo= document.createElement("article");
    const footerInterno= document.createElement("footer");
    const aside= document.createElement("aside");

    //unes todo a la seccion
    seccion.appendChild(headerInterno);
    seccion.appendChild(articulo);
    seccion.appendChild(footerInterno);
    seccion.appendChild(aside);

    //unir seccion en main
    main.appendChild(seccion);

    //retornar elementos
    return {seccion, headerInterno, articulo, footerInterno, aside};
};

// Crea el aside con promociones
function crearAside() {
    const aside = document.createElement("aside");
    aside.id = "aside-ofertas";

    const titulo = document.createElement("h2");
    titulo.textContent = "¡Oportunidades de oro!";
    aside.appendChild(titulo);

    const parrafo = document.createElement("p");
    parrafo.textContent = "Descubre joyas clásicas al mejor precio. Cada semana seleccionamos títulos únicos para verdaderos gamers.";
    aside.appendChild(parrafo);

    const lista = document.createElement("ul");
    const juegos = ["The Legend of Zelda (NES)", "Final Fantasy VII (PS1)", "Metal Gear Solid 2 (PS2)"];
    juegos.forEach(juego => {
        const li = document.createElement("li");
        li.textContent = juego;
        lista.appendChild(li);
    });
    aside.appendChild(lista);

    const boton = document.createElement("a");
    boton.href = "#";
    boton.textContent = "Ver todos los juegos";
    boton.classList.add("boton-aside");
    aside.appendChild(boton);
    seccion.appendChild(aside);
    return aside;
}

//crea el footer
export function crearFooter(footer) {
    const p= document.createElement("p");
    p.textContent = " ";

    footer.appendChild(p);
    return {footer, p};
};

//une todo al body
export function armarPagina() {
    const { header, main, footer } = elementos();
    crearHeader(header);
    crearMain(main);
    crearFooter(footer);
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
};