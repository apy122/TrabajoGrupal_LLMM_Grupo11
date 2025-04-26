import { armarPagina } from "./js/base.js"; 
import { iniciarNavPrincipal} from "./js/navPrincipal.js"; // Importa correctamente

document.addEventListener("DOMContentLoaded", () => {
    armarPagina();          // estructura general
    iniciarNavPrincipal(); // ahora sí crearás el nav
    modificarHeader();      // modular: cambiar header
    modificarMain();        // modular: cambiar main
    modificarFooter();      // modular: cambiar footer
});

// función para cambiar header
function modificarHeader() {
    const titulo = document.querySelector(".contenedor-titulo h1");
    if (titulo) {
        titulo.textContent = "Empresa X";
    }
}

// función para cambiar main
function modificarMain() {
    const headerInterno = document.querySelector("main section header");
    const articulo = document.querySelector("main section article");
    const aside = document.querySelector("main section aside");
    const footerInterno = document.querySelector("main section footer");

  
}

// función para cambiar footer
function modificarFooter() {
    const p = document.querySelector("footer p");
    if (p) {
        p.textContent = "Contacto - Todos los derechos reservados © 2025";
    }
}
