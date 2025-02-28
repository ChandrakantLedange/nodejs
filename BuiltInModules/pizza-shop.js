const Emmiter = require("node:events");

class PizzaShop extends Emmiter{
    constructor(){
        super();
        this.orderNumber = 0;
    }

    order(size, tipping){
        this.orderNumber++
        this.emit("order",size, tipping)
    }

    displayOrderNumber(){
        console.log(`current order number : ${this.orderNumber}`);
    }
}

module.exports = PizzaShop;