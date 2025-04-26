//Secciones principales de la pagina
export function elementos() {
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
    return { header, main, footer };
}

//crea el header
export function crearHeader(header) {
    return header;
}

//crea el footer
export function crearFooter(footer) {
    return footer;
};

//une todo al body
export function armarPagina() {
    const { header, main, footer } = elementos();
    crearHeader(header);
    crearFooter(footer);
    document.body.appendChild(header);
    document.body.appendChild(footer);
};