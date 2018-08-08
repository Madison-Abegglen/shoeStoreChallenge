import ShoeStoreService from "./ShoeStoreService.js"

//Private
let myShoeStoreService = new ShoeStoreService();

function draw() {
    let products = myShoeStoreService.getProducts();
    console.log(products)
    let template = ''
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        template += `
            <div>
                <h2>${product.name}</h2>
                <div>
                    <img src="${product.img}" alt="product image" />
                </div>
                <h3>Price: $${product.price}</h3>
                <h3>Quantity: ${product.quantity}</h3>
                <button onclick="app.controllers.ssCtrl.addToCart(${i})">Add To Cart</button>
            </div>
        `
        document.getElementById("product").innerHTML = template;
    }
}


//Public

class ShoeStoreController {
    constructor() {
        draw()
    }
    addToCart(index) {
        myShoeStoreService.addToCart(index)
    }
}

export default ShoeStoreController