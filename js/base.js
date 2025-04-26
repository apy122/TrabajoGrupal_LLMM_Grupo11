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