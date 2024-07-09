function cargar_productos(productosList) {
    let divProductList = document.querySelector("#div_product_list");

    divProductList.innerHTML = '';

    productosList.forEach(product => {
     
        let div = document.createElement("div");
        div.className = "item_product";

        const shortText = product.title.split(' ').slice(0, 5).join(' ');

        div.innerHTML = `
            <div class="box_img">
                <img src="${product.image}" alt="${shortText}">
            </div>
            <div class="caja_descri">
                <span class="name">${shortText}</span>
                <span class="price">Q${product.price}</span>
                <div class="buy_btn" id="comprar_${product.id}">Comprar</div>
            </div>
        `;
        divProductList.appendChild(div);
    });
}

export {cargar_productos};