import { armarPagina } from "./base.js";
import { crearNav } from "./navSecundario.js";


function iniciarPagina(){
    armarPagina();
    crearNav();
};

document.addEventListener("DOMContentLoaded", function() {
    iniciarPagina();
});