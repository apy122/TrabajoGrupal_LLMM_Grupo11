import { iniciarPaginaSecundaria} from "./navSecundario.js";

//crea el main
export function crearMain() {
    let h1 = document.createElement("h1");
    h1.textContent = "Acerca de"
    h1.style.color = "white";
    let main= document.querySelector("main");
    if (!main) {
        console.error("El elemento main ya existe en el DOM.");
        main = document.createElement("main");
        document.body.appendChild(main);
    }
    main.appendChild(h1);
};

//Cargar todo 
document.addEventListener("DOMContentLoaded", () => {
    iniciarPaginaSecundaria();
    crearMain();
   
});
