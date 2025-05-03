export function crearElementosSecundario() {
    const nav2 = document.createElement("nav");        
    const links2=[
        {nombre:"Home", url:"../index.html"},
        {nombre:"Noticias", url:"../html/noticias.html"},
        {nombre:"Quienes somos", url:"../html/about.html"},
        {nombre:"publicaciones", url:"../html/publicaciones.html"},
        {nombre:"Areas de Actuacion", url:"../html/areasActuacion.html"},
        {nombre:"Localizacion", url:"../html/localizacion.html"},
        {nombre:"Contacto", url:"../html/contacto.html"},
    ];
    return { nav2, links2};
}  

//crea el nav
export function crearNavSecundario(nav2, links2) {
    //crear boton menu
    const menu=document.createElement("button");
    menu.className="menu";
    menu.textContent="Menu";
    menu.addEventListener("click", function() {
        
    });
    nav2.appendChild(menu);
    
    //crear menus
    const ul=document.createElement("ul");
    ul.className="items";
    links2.forEach(element => {
     const li=document.createElement("li");
     const a=document.createElement("a");
     a.href=element.url;
     a.textContent=element.nombre;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav2.appendChild(ul);
    
    const headerSecundario=document.querySelector("header");
    if (headerSecundario) {
        headerSecundario.insertAdjacentElement("afterend", nav2);
    } else {
        throw new Error("No se encontró el elemento header en el DOM.");
    }

}

//Arma la pagina exporta los elementos fijos y crea el nav
export function iniciarNavSecundario(){
    const {nav2, links2}= crearElementosSecundario();
    crearNavSecundario(nav2, links2);
}