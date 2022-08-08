////       Recupera el array de products del Local Storage       /////

//HTML
const renderCartProducts = () => {
    let products = loadProductsCart();
    let content = `<p class="alert alert-warning" role="alert">Your Cart is empty!</p>`;
    let productNumberFullDiscount = 5; //Set on 5 the product with 100% off, so this product price will not be add for total
    let priceDiscounted = 0; //It'll be setted the price of the 5th product in cartProduct
    let productCounter = 0; 
    
    if (products.length > 0) {
        content = `<p class="text-end"><a href="#" class="btn btn-danger px-4" onclick="messageCleanCart()" title="Clean Cart">Clean Cart<img src="images/basket.png" width="24"></a></p>
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
            
            productCounter++; //Incremento el contador de productos en el carrito
            
            let subtotal = product.price * product.amount;

            //Almacena el precio del 5º producto distinto
            productCounter == productNumberFullDiscount && (priceDiscounted = product.price);
            
            content += `<tr>
                            <td class="align-middle">
                                <img src="images/${product.image}" alt="${product.name}" width="128">
                            </td>
                            <td class="align-middle">${product.name}</td>
                            <td class="align-middle text-end">
                                <title>Add</title>
                                <a href="" class="btn btn-warning" onclick="addCart(${product.id})" title="add">
                                    <img src="images/upArrow.png" width="24">
                                </a>
                            </td>
                            <td class="align-middle text-center">x${product.amount}</td>
                            <td class="align-middle">
                                <a href="" class="btn btn-warning" onclick="removeCart(${product.id})" title="remove">
                                    <img src="images/downArrow.png" width="24">
                                </a>
                            </td>
                            <td class="align-middle"><b>$${product.price}</b></td>
                            <td class="align-middle"><b>$${subtotal}</b></td>
                        </tr>`;
                
                total += subtotal;
        }

        total -= priceDiscounted; //Descuento el precio del 5º producto del total

        content += `<tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="align-middle">Total Pay</td>
                        <td class="align-middle"><b>$${total}</b></td>
                        <td class="align-middle">( Discounted</td>
                        <td class="align-middle"><b>$${priceDiscounted})</b></td>
                        <td></td>
                        <td class="align-middle">
                            <a href="#" class="btn btn-success px-5" onclick="messageBuy()" title="Complete Transaction">Buy</a>
                        </td>
                    </tr>`
        
        content += `</table>`;
    }

    //renderizo en el HTML
    document.getElementById("cartProducts").innerHTML = content;
}


/* function renderCartProducts() {
    let products = loadProductsCart();
    let content = `<p class="alert alert-warning" role="alert">Your Cart is empty!</p>`;
    let productNumberFullDiscount = 5; //Set on 5 the product with 100% off, so this product price will not be add for total
    let priceDiscounted = 0; //It'll be setted the price of the 5th product in cartProduct
    let productCounter = 0; 
    
    if (products.length > 0) {
        content = `<p class="text-end"><a href="#" class="btn btn-danger px-4" onclick="messageCleanCart()" title="Clean Cart">Clean Cart<img src="images/basket.png" width="24"></a></p>
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
            
            productCounter++; //Incremento el contador de productos en el carrito
            
            let subtotal = product.price * product.amount;

            //Almacena el precio del 5º producto distinto
            productCounter == productNumberFullDiscount && (priceDiscounted = product.price);
            
            content += `<tr>
                            <td class="align-middle">
                                <img src="images/${product.image}" alt="${product.name}" width="128">
                            </td>
                            <td class="align-middle">${product.name}</td>
                            <td class="align-middle text-end">
                                <title>Add</title>
                                <a href="" class="btn btn-warning" onclick="addCart(${product.id})" title="add">
                                    <img src="images/upArrow.png" width="24">
                                </a>
                            </td>
                            <td class="align-middle text-center">x${product.amount}</td>
                            <td class="align-middle">
                                <a href="" class="btn btn-warning" onclick="removeCart(${product.id})" title="remove">
                                    <img src="images/downArrow.png" width="24">
                                </a>
                            </td>
                            <td class="align-middle"><b>$${product.price}</b></td>
                            <td class="align-middle"><b>$${subtotal}</b></td>
                        </tr>`;
                
                total += subtotal;
        }

        total -= priceDiscounted; //Descuento el precio del 5º producto del total

        content += `<tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="align-middle">Total Pay</td>
                        <td class="align-middle"><b>$${total}</b></td>
                        <td class="align-middle">( Discounted</td>
                        <td class="align-middle"><b>$${priceDiscounted})</b></td>
                        <td></td>
                        <td class="align-middle">
                            <a href="#" class="btn btn-success px-5" onclick="messageBuy()" title="Complete Transaction">Buy</a>
                        </td>
                    </tr>`
        
        content += `</table>`;
    }

    //renderizo en el HTML
    document.getElementById("cartProducts").innerHTML = content;
}
 */


updateCartButton();
renderCartProducts();