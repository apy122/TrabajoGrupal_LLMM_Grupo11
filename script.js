import { armarPagina } from "/js/base.js";
import { crearNav } from "/js/navSecundario.js";


function iniciarPagina(){
    armarPagina();
    crearNav();
};

document.addEventListener("DOMContentLoaded", function() {
    iniciarPagina();
});