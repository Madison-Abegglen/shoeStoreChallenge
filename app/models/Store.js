console.log("hello from store.js")
import Product from "../models/Product.js"


class Store {
    constructor() {
        this.products = []
        this.till = 0
        this.cart = []
        this.setup()
    }

    setup() {
        let sandal = new Product("Birkenstock", "https://placehold.it/200x200", 120, 5)
        this.products.push(sandal)
        let shoe = new Product("Vans Skate Shoe", "https://placehold.it/200x200", 80, 3)
        this.products.push(shoe)
        let boot = new Product("Ugg Boots", "https://placehold.it/200x200", 150, 2)
        this.products.push(boot)
    }

    get Products() {

        //same as below
        // for (let i = 0; i < this.products.length; i++) {
        //     const product = this.products[i];

        // }
        // same as above
        // this.products.forEach(product=>{
        // })


        // let productsCopy = []

        // this.products.forEach(product => {
        //     let productCopy = {
        //         name: product.name,

        //     }
        // })

        //not the safe way but ok for now
        return this.products
    }

    addToCart(index) {
        this.cart.push(this.products[index])
        debugger
    }
}


export default Store