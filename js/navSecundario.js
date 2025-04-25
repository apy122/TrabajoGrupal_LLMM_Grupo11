function crearElementosBase() {
    const nav = document.createElement("nav");
    const links=[
        {nombre:"Home", url:"../index.html"},
        {nombre:"Noticias", url:"../html/noticias.html"},
        {nombre:"Quienes somos", url:"../html/about.html"},
        {nombre:"publicaciones", url:"../html/publicaciones.html"},
        {nombre:"Areas de Actuacion", url:"../html/areasActuacion.html"},
        {nombre:"Localizacion", url:"../html/localizacion.html"},
        {nombre:"Contacto", url:"../html/contacto.html"},
    ]
    return {nav, links};
}

//crea el nav
export function crearNav(nav, links) {
    const ul=document.createElement("ul");
    links.forEach(element => {
     const li=document.createElement("li");
     const a=document.createElement("a");
     a.href=element.url;
     a.textContent=element.nombre;
        li.appendChild(a);
        ul.appendChild(li);
    });
    nav.appendChild(ul);
    const header=document.querySelector("header");
    if(header){
        header.appendChild(nav);
 }else{
    throw new Error("No se encontró el elemento header en el DOM.");
 }
}