import { armarPagina } from "./base.js"; 
import { iniciarNavSecundario } from "./navSecundario.js"; // Importa correctamente

document.addEventListener("DOMContentLoaded", () => {
    armarPagina();          
    iniciarNavSecundario(); 
    modificarHeader();      
    modificarMain();        
    modificarFooter();  
});

// función para cambiar header
function modificarHeader() {
    const titulo = document.querySelector(".contenedor-titulo h1");
    if (titulo) {
        titulo.textContent = "Publicacion";
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
