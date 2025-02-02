////        Local Storage       ////

//Me trae los products, y si no existe un array de products me devuelve un array vacío
const loadProductsLS = () => {
    return JSON.parse(localStorage.getItem("products")) || [];

}

//Almacena el array de products en el local storage
const saveProductsLS = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
}

//Le paso el id y me devuelve el objeto correspondiente
const searchProduct = (id) => {
    let products = loadProductsLS(); //obtiene el listado de products
    return products.find(x => x.id == id);
} 