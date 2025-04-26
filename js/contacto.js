import { armarPagina } from "./base.js"; 
import { iniciarNavSecundario } from "./navSecundario.js"; 

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
        titulo.textContent = "Contacto";
    }
}
function modificarMain() {
    // Variables
    const headerInterno = document.querySelector("main section header");
    const articulo = document.querySelector("main section article");

    if (!headerInterno || !articulo) {
        console.error("No se encontró headerInterno o articulo");
        return;
    }

    // Crear subheader (h2)
    const h2 = document.createElement("h2");
    h2.textContent = "Formulario de Inscripción";
    headerInterno.appendChild(h2);

    // Definición de campos agrupados por fieldsets
    const fieldsets = [
        {
            legend: "Datos personales",
            campos: [
                { type: "text", name: "nombre", label: "Nombre completo: ", required: true },
                { type: "email", name: "email", label: "Correo electrónico: ", required: true },
                { type: "tel", name: "telefono", label: "Teléfono: ", required: false },
                { type: "text", name: "empresa", label: "Empresa: ", required: true }
            ]
        },
        {
            legend: "Mensaje",
            campos: [
                { type: "text", name: "asunto", label: "Asunto: ", required: true },
                { type: "text", name: "mensaje", label: "Mensaje :", required: true }
            ]
        },
        {
            legend: "Permisos",
            campos: [
                { type: "checkbox", name: "privacidad", label: "Acepto la política de privacidad: ", required: true }
            ]
        }
    ];

    // Crear el formulario
    const form = document.createElement("form");
    form.id = "formulario-contacto";
    form.method = "POST";
    form.action = "mailto:empresax@correodeprueba.es";

    // Recorrer fieldsets
    fieldsets.forEach(elementosForm => {
        const fieldset = document.createElement("fieldset");
        
        //creo los legends
        const legend = document.createElement("legend");
        legend.textContent = elementosForm.legend;
        fieldset.appendChild(legend);

        // Crear cada campo dentro del fieldset
        elementosForm.campos.forEach(campo => {
            const divCampo = document.createElement("div");

            const label = document.createElement("label");
            label.textContent = campo.label;
            label.setAttribute("for", campo.name);

            let input;
            if (campo.tag === "textarea") {
                input = document.createElement("textarea");
            } else {
                input = document.createElement("input");
                input.type = campo.type;
            }

            input.name = campo.name;
            input.id = campo.name;
            if (campo.required) {
                input.required = true;
            }

            divCampo.appendChild(label);
            divCampo.appendChild(input);
            fieldset.appendChild(divCampo);
        });

        // Añadir fieldset al formulario
        form.appendChild(fieldset);
    });

    // Botón de envío
    const boton = document.createElement("button");
    boton.type = "submit";
    boton.textContent = "Enviar Mensaje";
    form.appendChild(boton);

    // Insertar formulario dentro del artículo
    articulo.appendChild(form);
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
