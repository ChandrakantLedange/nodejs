const fs = require("node:fs");

console.log("First");
const txtContent = fs.readFileSync("./file.txt","utf-8");

console.log(txtContent); //Hello from text file
console.log("Second");

fs.readFile("./file.txt", "utf-8",(error, data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});
console.log("Thired");

fs.writeFileSync("./greet.txt","Hello World");

// fs.writeFile("./greet.txt","Hello chandrakant!",(err)=>{ // this will override with for above hello world, if you don't want to overide and want to append you can use flag as next example.
//     if(err){
//         console.log("err",err);
//     }else{
//         console.log("File Written");
//     }
// })

fs.writeFile("./greet.txt"," Hello chandrakant!",{flag:"a"},(err)=>{ // this will override with for above hello world, if you don't want to overide and want to append you can use flag as next example.
    if(err){
        console.log("err",err);
    }else{
        console.log("File Written");
    }
})