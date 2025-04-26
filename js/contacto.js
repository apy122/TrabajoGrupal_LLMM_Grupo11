import { iniciarPaginaSecundaria} from "./navSecundario.js";

//crea el main
export function crearMain() {
    let contenedor = document.createElement("div");
    contenedor.classList.add("contenedor-Contacto");
    let h1 = document.createElement("h1");
    h1.textContent = "Contacto"
    h1.style.color = "white";
    let main= document.querySelector("main");
    if (!main) {
        console.error("El elemento main ya existe en el DOM.");
        main = document.createElement("main");
        document.body.appendChild(main);
    }
    main.appendChild(contenedor);
};

//Cargar todo
document.addEventListener("DOMContentLoaded", () => {
    iniciarPaginaSecundaria();
    crearMain();
   
});
