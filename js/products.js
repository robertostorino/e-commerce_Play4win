//Array con los products de mi e-commerce
const products = [
    {id:1, name:"Battlefield 2024 PS4", destacado:"Todo lo mejor con queso", descripcion:"Carne a la parrilla, pan, queso cheddar, mostaza y ketcup. Apta para sumarle queso ;)", image:"battlefield2042PS4.jpg", price:500},
    {id:2, name:"Elden Ring PS4", destacado:"Infalible", descripcion:"Carne a la parrilla, pan, tomate, lechuga, mostaza y ketchup. Se llama clásica porque nunca pasa de moda", image:"eldenRingPS4.jpeg", price:600},
    {id:3, name:"Final Fantasy VII PS4", destacado:"Una hamburguesa Kingcreíble", descripcion:"Pollo, pan, lechuga, mayonesa. Sencillamente increíble.", image:"finalFantasyRemakeVIIPS4.jpg", price:450},
    {id:4, name:"Ghost of Tsushima PS4", destacado:"Lo mejor del pollo, pero CRISPY", descripcion:"Pollo crispy, pan, tomate, lechuga, mayonesa, pepinos, ketchup, cebolla. Pensada para los fans del pollo.", image:"ghostOfTsushimaPS4.jpg", price:650},
    {id:5, name:"Gran Turismo 7 PS4", destacado:"Tranki y ATR", descripcion:"Lechuga, queso en hebras, croutons, pollo crispy y agua mineral 500ml. Fresca y riquisima.", image:"granTurismo7PS4.jpg", price:450},
    {id:6, name:"Horizon Forbidden West Standard PS4", destacado:"Naturales, ricas y muy crocantes.", descripcion:"Las papas fritas más ricas en cuatro tamaños: regular, mediano, grande y king.", image:"horizonForbiddenWestStandardPS4.jpeg", price:500},
    {id:7, name:"Sekiro: Shadow die Twice GOTY PS4", destacado:"Naturales, ricas y muy crocantes.", descripcion:"Las papas fritas más ricas en cuatro tamaños: regular, mediano, grande y king.", image:"sekiroGOTYEditionPS4.jpg", price:500},
    {id:8, name:"Shadow of War PS4", destacado:"Naturales, ricas y muy crocantes.", descripcion:"Las papas fritas más ricas en cuatro tamaños: regular, mediano, grande y king.", image:"shadowOfWarPS4.jpg", price:500},
    {id:9, name:"Star Wars: Jedi Deluxe Edition PS4", destacado:"Naturales, ricas y muy crocantes.", descripcion:"Las papas fritas más ricas en cuatro tamaños: regular, mediano, grande y king.", image:"starWarsJediDeluxEditionPS4.jpg", price:500},
    {id:10, name:"Street Fighter V Champion Edition PS4", destacado:"Naturales, ricas y muy crocantes.", descripcion:"Las papas fritas más ricas en cuatro tamaños: regular, mediano, grande y king.", image:"streetFighterVChampioEditionPS4.jpg", price:500},
    {id:11, name:"The King of Fighters XV PS4", destacado:"Naturales, ricas y muy crocantes.", descripcion:"Las papas fritas más ricas en cuatro tamaños: regular, mediano, grande y king.", image:"theKingOfFightersXVPS4.jpg", price:500},
    {id:12, name:"Uncharted 4 PS4", destacado:"Naturales, ricas y muy crocantes.", descripcion:"Las papas fritas más ricas en cuatro tamaños: regular, mediano, grande y king.", image:"uncharted4PS4.jpg", price:500},
    {id:13, name:"W2K20 PS4", destacado:"Naturales, ricas y muy crocantes.", descripcion:"Las papas fritas más ricas en cuatro tamaños: regular, mediano, grande y king.", image:"w2k20PS4.jpg", price:500},
];


////        Local Storage       ////

//Me trae los products, y si no existe un array de products me devuelve un array vacío
function loadProductsLS() {
    return JSON.parse(localStorage.getItem("products")) || [];
}

//Almacena el array de products en el local storage
function saveProductsLS(products) {
    localStorage.setItem("products", JSON.stringify(products));
}



//Le paso el id y me devuelve el objeto correspondiente
function searchProduct (id){
    let products = loadProductsLS(); //obtiene el listado de products
    return products.find(x => x.id == id);
}