//Me trae los products seleccionados,si no existe un array de products me devuelve un array vacío
function loadProductsCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

//Almacena el array de products en el local storage
function saveProductsCart(products) {
    localStorage.setItem("cart", JSON.stringify(products));
}


///        cart         ////

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

        content = `<button type="button" class="btn btn-warning position-relative">
                        <img src="images/cart.png" width="24"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${total}</span>
                    </button>`; 
    }
    //Impacto en el HTML
    document.getElementById("cart_btn").innerHTML = content;
}
