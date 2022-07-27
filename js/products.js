//Array con los products de mi e-commerce
/* const products = [
    {id:1, name:"Battlefield 2024 PS4", category:"First-shooter", description:"", image:"battlefield2042PS4.jpg", price:500},
    {id:2, name:"Elden Ring PS4", category:"RPG Adventure", description:"", image:"eldenRingPS4.jpeg", price:600},
    {id:3, name:"Final Fantasy VII PS4", category:"RPG", description:"", image:"finalFantasyRemakeVIIPS4.jpg", price:450},
    {id:4, name:"Ghost of Tsushima PS4", category:"Adventure", description:"", image:"ghostOfTsushimaPS4.jpg", price:650},
    {id:5, name:"Gran Turismo 7 PS4", category:"Racing Car Simulator", description:"", image:"granTurismo7PS4.jpg", price:450},
    {id:6, name:"Horizon Forbidden West Standard PS4", category:"Distopic Sandbox", description:"", image:"horizonForbiddenWestStandardPS4.jpeg", price:500},
    {id:7, name:"Sekiro: Shadow die Twice GOTY PS4", category:"Adventure", description:"", image:"sekiroGOTYEditionPS4.jpg", price:500},
    {id:8, name:"Shadow of War PS4", category:"Adventure", description:"", image:"shadowOfWarPS4.jpg", price:500},
    {id:9, name:"Star Wars: Jedi Deluxe Edition PS4", category:"Adventure", description:"", image:"starWarsJediDeluxEditionPS4.jpg", price:500},
    {id:10, name:"Street Fighter V Champion Edition PS4", category:"Fight", description:"", image:"streetFighterVChampioEditionPS4.jpg", price:500},
    {id:11, name:"The King of Fighters XV PS4", category:"Fight", description:"", image:"theKingOfFightersXVPS4.jpg", price:500},
    {id:12, name:"Uncharted 4 PS4", category:"Adventure", description:"", image:"uncharted4PS4.jpg", price:500},
    {id:13, name:"W2K20 PS4", category:"Fight", description:"", image:"w2k20PS4.jpg", price:500},
]; */


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