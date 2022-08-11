//Set url with data
let url = "./products.json";

//Setea el evento para que cuando se complete la carga del DOM, entonces dispara la función fetchData
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

//Function to retrieve products in async-await from url. 
const fetchData = async () => {
    try {
        loadingData(true);

        const answer = await fetch(url);
        const products = await answer.json();

        saveProductsLS(products);
        updateCartButton();
        renderProductsDOM();

    } catch (error) {
        console.log(error); //Si detecta un error lo muestra en la consola
    } finally {
        loadingData(false);
    }
};

//Function to add and remove the "loading" message
const loadingData = (state) => {
    const loading = document.querySelector("#loading");
    
    state ? (loading.classList.remove("d-none")) : (loading.classList.add("d-none"));
    
};


//Function to render products via DOM
const renderProductsDOM = () => {
    let products = loadProductsLS();
    let content = "";
    
    
    products.forEach(
        product => {

            content += `
                    <div class="card shadow p-3 mb-5 bg-body rounded m-3" style="width: 18rem;">
                        <div class="card-body p-1">
                            <div class="card--principal">
                                <img src="images/${product.image}" class="card-img-top">
                            </div>
                            <hr>
                            <div class="d-flex" style="height: 120px;">
                                <div class="flex-grow-1">
                                    <h5 class="text-center color-blue fs-3">${product.name}</h5>
                                </div>
                            </div>
                            <p class="lead fs-4 text-center">$${product.price}</p>
                            <p class= "text-center">
                                <a class="btn btn-outline-danger px-5" onclick="addCart(${product.id})" title="Add to cart">Add</a>
                            </p>
                        </div>
                    </div>
                    `
        }
        
    )

    document.getElementById("products").innerHTML = content;
}
