//DOM
function renderproductsDOM() {
    let products = loadProductsLS();
    let content = "";

    //Recorro el array de products
    for (let product of products) {
        
        //Crea el div contenedor de la tarjeta y le establece que ocupe 4 columns
        let column = document.createElement("div");
        column.className = "col-md-4"

        //Crea el div tarjeta
        let card = document.createElement("div");
        card.className = "card border-0 fondo";

        //Crea la image
        let image = document.createElement("img");
        image.src = `images/${product.image}`;
        image.className = "card-img-top";
        image.alt = product.name;

        //Crea el cuerpo de la tarjeta
        let card_body = document.createElement("div");
        card_body.className = "card-body";

        //Crea el título
        let title = document.createElement("h5");
        title.className = "card-title text-center";
        title.innerHTML = product.name;

        //Crea el precio
        let price = document.createElement("p");
        price.className = "card-title text-center";
        title.innerHTML = "$" + product.price;

        //Creo el botón
        let paragraph_btn = document.createElement("p");
        paragraph_btn.className = "card-title text-center";
        paragraph_btn.innerHTML = `<a class="btn btn-danger" onclick="addCart(${product.id})">Add</a>`;

        //Conecto los elementos según su relación padre-hijo

        card_body.appendChild(title);
        card_body.appendChild(price);
        card_body.appendChild(paragraph_btn);

        card.appendChild(image);
        card.appendChild(card_body);

        column.appendChild(card);

        //Renderizo en el HTML
        document.getElementById("products").appendChild(column);
    }
}





saveProductsLS(products);
updateCartButton();
renderproductsDOM();
