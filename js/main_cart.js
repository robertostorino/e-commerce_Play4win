////       Recupera el array de products del Local Storage       /////

//HTML
function renderCartProducts() {
    let products = loadProductsCart();
    let content = `<p class="alert alert-warning" role="alert">Your Cart is empty!</p>`;
    
    if (products.length > 0) {
        content = `<p class="text-end"><a href="#" class="btn btn-danger" onclick="cleanCart()" title="Vaciar Carrito">Clean Cart<img src="images/basket.png" width="24"></a></p>
        <table class="table">`;
    
        //Recorro el array de products
        for (let product of products) {
            content += `<tr>
                            <td class="align-middle"><img src="images/${product.image}" alt="${product.name}" width="128"></td>
                            <td class="align-middle">${product.name}</td>
                            <td class="align-middle"><b>$${product.price}</b></td>
                            <td class="align-middle text-end"><a href="#" class="btn btn-danger"><img src="images/basket.png" width="24"></a></td>
                        </tr>`;
        }
        
        content += `</table>`;
    }
    
    

    //renderizo en el HTML
    document.getElementById("cartProducts").innerHTML = content;
}


updateCartButton();
renderCartProducts();