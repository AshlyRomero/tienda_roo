function cargarHeader(){
    let divHeader = document.querySelector("·header");

    let parteHeader = `
            <div id="header">
            <div class="logo">Tienda Virtual</div>
            <div class="nav-links">
                <a href="#inicio">Inicio</a>
                <a href="#productos">Productos</a>
                <a href="#ofertas">Ofertas</a>
                <a href="#contacto">Contacto</a>
            </div>
        </div>
    `;

    divHeader.innerHTML= parteHeader;
    
}
export { cargarHeader };