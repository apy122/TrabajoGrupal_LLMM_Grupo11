import { iniciarNavSecundario } from "./navSecundario.js";  
document.addEventListener("DOMContentLoaded", () => {
    iniciarNavSecundario();
    modificarHeader(); 
    modificarMain();
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
    const main = document.querySelector("main");

    if (!main) {
        console.error("No se encontró main o articulo");
        return;
    }

    // Crear subheader (h2)
    const h2 = document.createElement("h2");
    h2.textContent = "Formulario de Inscripción";
    h2.id = "subtitulo";
    main.appendChild(h2);

    // Definición de campos agrupados por fieldsets
    const fieldsets = [
        {
            campos: [
                { type: "text", name: "nombre", label: "Nombre completo: ", required: true },
                { type: "email", name: "email", label: "Correo electrónico: ", required: true },
                { type: "tel", name: "telefono", label: "Teléfono: ", required: false }
            ]
        },
        {
            tag: "genero",
            type: "radio",
            name: "genero",
            label: "Género: ",
            campos: [
                { value: "hombre", label: "Hombre" },
                { value: "mujer", label: "Mujer" },
                { value: "otro", label: "Otro" }
            ],
            required: true
        },
        {
            campos: [
                { type: "text", name: "asunto", label: "Asunto: ", required: true },
                { tag: "textarea", name: "mensaje", label: "Mensaje :", required: true }
            ]
        },
    ];

    // Crear el formulario
    const form = document.createElement("form");
    form.id = "formulario-contacto";
    form.method = "POST";
    form.action = "mailto:empresax@correodeprueba.es";

    // Recorrer fieldsets
    fieldsets.forEach(elementosForm => {
        const fieldset = document.createElement("fieldset");

        // Manejar el campo de tipo "genero" (radio buttons)
        if (elementosForm.tag === "genero" && elementosForm.campos) {
            const divCampo = document.createElement("div");
            const legend = document.createElement("legend");
            legend.textContent = elementosForm.label;
            divCampo.appendChild(legend);

            elementosForm.campos.forEach(opcion => {
                const input = document.createElement("input");
                input.type = elementosForm.type;
                input.name = elementosForm.name;
                input.value = opcion.value;
                input.id = opcion.value;

                const labelOpcion = document.createElement("label");
                labelOpcion.textContent = opcion.label;
                labelOpcion.setAttribute("for", opcion.value);

                const contenedorOpcion = document.createElement("div");
                contenedorOpcion.appendChild(input);
                contenedorOpcion.appendChild(labelOpcion);
                divCampo.appendChild(contenedorOpcion);
            });

            fieldset.appendChild(divCampo);
            form.appendChild(fieldset);
            return; // Salir del bucle para evitar añadir el fieldset de nuevo
        }

        // Crear cada campo dentro del fieldset
        if (elementosForm.campos) {
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
        }

        // Añadir fieldset al formulario
        form.appendChild(fieldset);
    });

    // Crear el campo de aceptación de la política de privacidad
    const divPrivacidad = document.createElement("div");
    const labelPrivacidad = document.createElement("label");
    labelPrivacidad.textContent = "Acepto la política de privacidad";
    labelPrivacidad.setAttribute("for", "politica-privacidad");

    const inputPrivacidad = document.createElement("input");
    inputPrivacidad.type = "checkbox";
    inputPrivacidad.required = true;
    inputPrivacidad.name = "politica-privacidad";
    inputPrivacidad.id = "politica-privacidad";

    divPrivacidad.appendChild(labelPrivacidad);
    divPrivacidad.appendChild(inputPrivacidad);
    form.appendChild(divPrivacidad);

    // Botón de envío
    const boton = document.createElement("button");
    boton.type = "submit";
    boton.textContent = "Enviar Mensaje";
    form.appendChild(boton);

    // Insertar formulario dentro del artículo
    main.appendChild(form);
    document.body.appendChild(main); // Añadir el formulario al body del documento
}
