import { armarPagina } from "./js/base.js";
import { crearNav } from "./js/navPrincipal.js";


function iniciarPagina(){
    armarPagina();
    crearNav();
};

document.addEventListener("DOMContentLoaded", function() {
    iniciarPagina();
});