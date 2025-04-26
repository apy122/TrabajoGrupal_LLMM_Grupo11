import { armarPagina } from "./base.js"; 
import { iniciarNavSecundario } from "./navSecundario.js"; // Importa correctamente

document.addEventListener("DOMContentLoaded", () => {
    armarPagina();          // estructura general
    iniciarNavSecundario(); // ahora sí crearás el nav
    modificarHeader();      // modular: cambiar header
    modificarMain();        // modular: cambiar main
    modificarFooter();      // modular: cambiar footer
});

// función para cambiar header
function modificarHeader() {
    const titulo = document.querySelector(".contenedor-titulo h1");
    if (titulo) {
        titulo.textContent = "Contacto";
    }
}

// función para cambiar main
function modificarMain() {
    const headerInterno = document.querySelector("main section header");
    const articulo = document.querySelector("main section article");
    const aside = document.querySelector("main section aside");
    const footerInterno = document.querySelector("main section footer");
    const form= document.createElement("form");


    return{headerInterno, articulo, aside, footerInterno};

}


// función para cambiar footer
function modificarFooter() {
    const p = document.querySelector("footer p");
    if (p) {
        p.textContent = "Contacto - Todos los derechos reservados © 2025";
    }
}
