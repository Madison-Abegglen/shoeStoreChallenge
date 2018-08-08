import ShoeStoreController from "./app/components/ShoeStoreController.js"

class App {
    constructor() {
        this.controllers = {
            ssCtrl: new ShoeStoreController()
        }
    }
}


console.log("hello from main.js")

window.app = new App()