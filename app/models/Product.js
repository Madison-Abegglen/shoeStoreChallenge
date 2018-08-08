console.log("hello from Product.js")

function uuid() {
    var uuid = "", i, random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;

        if (i == 8 || i == 12 || i == 16 || i == 20) {
            uuid += "-"
        }
        uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
}

class Product {
    constructor(
        name,
        img,
        price,
        quantity
    ) {
        this.id = uuid()
        this.name = name || ''
        this.img = img || ''
        this.price = price || 0
        this.quantity = quantity || 0
    }


}

export default Product 
