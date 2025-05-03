export function crearElementosPrincipal() {
    const nav1 = document.createElement("nav");
    const links1=[
        {nombre:"Home", url:"index.html"},
        {nombre:"Noticias", url:"html/noticias.html"},
        {nombre:"Quienes somos", url:"html/about.html"},
        {nombre:"publicaciones", url:"html/publicaciones.html"},
        {nombre:"Areas de Actuacion", url:"html/areasActuacion.html"},
        {nombre:"Localizacion", url:"html/localizacion.html"},
        {nombre:"Contacto", url:"html/contacto.html"},
    ]
    return {nav1, links1};
}

//crea el nav
export function crearNavPrincipal(nav1, links1) {
    //crear boton menu
    const menu=document.createElement("button");
    menu.id="menu";
    menu.textContent="Menu";
    menu.style.visibility="hidden";
    nav1.appendChild(menu);

    //crear menu
    const ul=document.createElement("ul");
    links1.forEach(element => {
     const li=document.createElement("li");
     const a=document.createElement("a");
     a.href=element.url;
     a.textContent=element.nombre;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav1.appendChild(ul);
    const headerPrincipal = document.querySelector("header");
    if (headerPrincipal) {
        headerPrincipal.insertAdjacentElement("afterend", nav1);
    } else {
        throw new Error("No se encontró el elemento header en el DOM.");
    }
}

 //Arma la pagina exporta los elementos fijos y crea el nav
 export function iniciarNavPrincipal(){
     const {nav1, links1} = crearElementosPrincipal();
     crearNavPrincipal(nav1, links1);
 }