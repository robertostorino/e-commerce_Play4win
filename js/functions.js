//Me trae los products seleccionados,si no existe un array de products me devuelve un array vacío
function loadProductsCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

//Almacena el array de products en el local storage
function saveProductsCart(products) {
    localStorage.setItem("cart", JSON.stringify(products));
}


///        cart         ////

//Manda mensaje de oferta
function messageOffer() {
    Swal.fire("SPECIAL OFFER! BUYING 4, THE 5TH IS FREE!!!");
}

//Manda mensaje al agregar un producto al carrito
function messageAddCart() {
    Toastify({
        text: "You've successfully added a product to cart",
        duration: 3000,
        gravity: 'top',
        position: 'right',
        backgroundColor: "green",
        className: "cartel"
    }).showToast();
}

//Mensaje para confirmar vaciado de carrito
function messageCleanCart () {
    Swal.fire({
        title: 'Are you sure to Clean your Cart?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Clean!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
}

function updateCartButton(){
    let products = loadProductsCart();
    //Se le impactará el content HTML de dicha sección
    let content =`<button type="button" class="btn btn-warning position-relative">
                        <img src="images/cart.png" width="24"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
                    </button>`; 
    let total = 0;

    //valido
    if (products.length > 0) {
        for (let product of products) {
            total += product.amount;
        }

        //Si ya tiene 2 artículos en el carrito, le salta un alert con la promoción
        total == 2 && messageOffer();

        content = `<button type="button" class="btn btn-warning position-relative">
                        <img src="images/cart.png" width="24"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${total}</span>
                    </button>`; 
    }
    //Impacto en el HTML
    document.getElementById("cart_btn").innerHTML = content;
}

//Remove all products from cart
function cleanCart() {
    localStorage.removeItem("cart");
    updateCartButton();
    renderCartProducts(); //para que renderice luego de borrar todo
}

//Tomo como parámetro un id y agrego dicho product al cart
function addCart (id){
    let cartProducts = loadProductsCart();
    let position = cartProducts.findIndex(x => x.id == id); //Me devuelve la posición del producto con el id

   /*  //Desestructuración
    const { name, price } = product;
    console.log("Game: " + name + " |  Price: $" + price); */

    //si ya existe, entonces incremento en 1 la cantidad (no vuelvo a agregar un objeto nuevo)
    if (position > -1) {
        cartProducts[position].amount += 1;
    } else {
        //Si no existe, entonces agrego el objeto
        let product = searchProduct(id);
        product.amount = 1; //Le agrego una nueva propiedad al objeto y la inicializo en 1
        cartProducts.push(product); //Agrego un nuevo objeto al array de productos_carrito
    }

    saveProductsCart(cartProducts); //actualizo la Local Storage de products cart
    messageAddCart();
    updateCartButton();
    renderCartProducts();

}

//Tomo como parámetro un id y elimina dicho producto al carrito
function removeCart (id){
    let cartProducts = loadProductsCart();
    let position = cartProducts.findIndex(x => x.id == id); //Me devuelve la posición del producto con el id
    
    //Me ubico en la posición del producto y decremento en 1 el valor de "cantidad"
    cartProducts[position].amount -= 1; 

    if (cartProducts[position].amount == 0) {
        //si llega a 0, entonces remuevo el objeto del array Productos Carrito.
        cartProducts.splice(position, 1); //Se posiciona y elimina solamente un objeto del array.
    }

    saveProductsCart(cartProducts); //actualizo la Local Storage de productos carrito
    updateCartButton();
    renderCartProducts(); //para que renderice luego de borrar todo

}