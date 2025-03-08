const http = require("node:http");


const server = http.createServer((req,res)=>{
    // res.end(req.url); //  result with / root page 
    if(req.url === "/"){
        res.writeHead(200,{"content-Type":"text/plain"});
        res.end("Home page")
    }else if(req.url === "/about"){
        res.writeHead(200,{"content-Type":"text/plain"});
        res.end("About page")
    }else if(req.url === "/api"){
        res.writeHead(200,{"content-Type":"application/json"});
        res.end(JSON.stringify({firstName : "Chandrakant", lastName : "Ledange"}))
    }else{
        res.writeHead(400);
        res.end("Page not found")
    }

});


server.listen(3000,()=>{
    console.log("server listing on port localhost:3000")
})