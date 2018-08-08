import Product from "../models/Product.js"
import Store from "../models/Store.js"

let shoeStore = new Store()

class ShoeStoreService {
    constructor() {

    }
    addToCart(index) {
        shoeStore.addToCart(index)
    }
    getProducts() {
        return shoeStore.Products
    }
}

export default ShoeStoreService