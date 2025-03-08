const http  = require("node:http");

const fs = require("node:fs");

const server = http.createServer((req, res)=>{
    // console.log("req:",req)

    // const superHero ={
    //     firstName : 'superman',
    //     lastName : 'batman'
    // }

    //plain text
    // res.writeHead(200,{"content-type":"text/plain"});
    // res.end("Welcome to the server")

    //json data as response
    // res.writeHead(200,{"content-type":"application/json"});
    // res.end(JSON.stringify(superHero));
    
    // HTML as response
    // res.writeHead(200,{"content-type":"text/html"});
    // res.end("<h1>Hello world</h1>");
    
    //Now we can use HTML file 
    // res.writeHead(200,{"content-type":"text/html"});
    // const html  = fs.readFileSync("./index.html","utf-8");
    // res.end(html);

    //but above method is synchrnous, it may consume lot memory.
    //so use stream to pass data in chunk
    res.writeHead(200,{"content-type":"text/html"});
    fs.createReadStream(__dirname + "/index.html").pipe(res);
    

});

server.listen(3000,()=>{
    console.log("server is running on port 3000");
});