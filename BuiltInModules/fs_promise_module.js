const { read } = require("node:fs");
const fs = require("node:fs/promises");

// console.log('first');

// fs.readFile("./file_promise_module.txt","utf-8")
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

// console.log('second');


//Actual async function.
async function readFile(){
    try{
        const data = await fs.readFile("./file_promise_module.txt","utf-8")
        console.log(data);
    }
    catch(err){
        console.log(err)
    }
}

readFile();