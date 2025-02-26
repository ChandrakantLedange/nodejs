const EventEmmitter  = require('node:events');

const emmiter = new EventEmmitter();

// emmiter.on("order-pizza",()=>{
//     console.log('oreder received! Baking a pizza')
// })

// emmiter.emit("order-pizza");

//with parameter
emmiter.on("order-pizza",(size, topping)=>{
    console.log(`oreder received! Baking a ${size} pizza with ${topping}`)
})

emmiter.on("order-pizza",(size)=>{
    if(size === 'large'){
        console.log("serving complimentary drink");
    }
})

emmiter.emit("order-pizza","large","mushroom");