////       Recupera el array de products del Local Storage       /////

//HTML
function renderCartProducts() {
    let products = loadProductsCart();
    let content = `<p class="alert alert-warning" role="alert">Your Cart is empty!</p>`;
    console.log("longitud = " + products.length);
    
    if (products.length > 0) {
        content = `<p class="text-end"><a href="#" class="btn btn-danger px-4" onclick="cleanCart()" title="Clean Cart">Clean Cart<img src="images/basket.png" width="24"></a></p>
            <table class="table">
            <tr>
                <td></td>
                <td> <b> Product </b> </td>
                <td> <b>  </b> </td>
                <td> <b> Amount </b> </td>
                <td> <b>  </b> </td>
                <td> <b> Price </b> </td>
                <td> <b> Subtotal </b> </td>
            </tr>`;
        let total = 0;
    
        //Recorro el array de products
        for (let product of products) {
            let subtotal = product.price * product.amount;
            content += `<tr>
                            <td class="align-middle">
                                <img src="images/${product.image}" alt="${product.name}" width="128">
                            </td>
                            <td class="align-middle">${product.name}</td>
                            <td class="align-middle text-end">
                                <title>Add</title>
                                <a href="" class="btn btn-warning" onclick="addCart(${product.id})" title="add">
                                <img src="images/upArrow.png" width="24"></a>
                            </td>
                            <td class="align-middle text-center">x${product.amount}</td>
                            <td class="align-middle">
                                <a href="" class="btn btn-warning" onclick="removeCart(${product.id})" title="remove">
                                <img src="images/downArrow.png" width="24"></a>
                            </td>
                            <td class="align-middle"><b>$${product.price}</b></td>
                            <td class="align-middle"><b>$${subtotal}</b></td>
                        </tr>`;
                        total += subtotal;
        }
        
        content += `<tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="align-middle">Total Pay</td>
                        <td class="align-middle"><b>$${total}</b></td>
                        <td></td>
                        <td class="align-middle"><a href="#" class="btn btn-success px-5" title="Complete Transaction">Buy</a></td>
                    </tr>`
        
        content += `</table>`;
    }

    //renderizo en el HTML
    document.getElementById("cartProducts").innerHTML = content;
}



updateCartButton();
renderCartProducts();