import { cargar_categorias } from "../cargar_categorias/cargarcategorias.js";
import { cargar_productos } from "../cargar_productos/cargarproductos.js";
import { cargarHeader } from "./header.js";

const DOM = document.querySelector("#root");

DOM.innerHTML = `
    <header id="header"></header>
    <main class="body">
        <section id="div_product_list"></section>
        <section id="div_summery_description"></section>
    </main>
    <footer id="footer"></footer>
`;

async function cargarcategoriasYproductos() {
    try {
     
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

    
        cargar_productos(data);

    
        cargar_categorias();
    } catch (error) {
        console.error("Error al cargar categorías y productos:", error);
    }
}

cargarcategoriasYproductos();
cargarHeader();