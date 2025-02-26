function greet(name){
    console.log(`Hello ${name}`)
}

function greetName(callback){
    let name = 'Chandrakant';
    callback(name);
}

greetName(greet);

// A function accept another function as an argument and return a function called callback function.

//Types of callbacks
//synchronous and asynchronous

// a callback which is executed immediatly is called a synchronous callback. 

//Ex - map, filter, reduce etc are synchronous callbacks.

//Asynchronous 
//A callback that is often used to continue or resume code execustion after an asynchronous operation has completed.

// callbacks are used to delay the execution of a function until a perticular time or event has occurred.
// Ex - fetching data from database or handling network call.
