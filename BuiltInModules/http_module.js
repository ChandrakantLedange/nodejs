const http  = require("node:http");

const server = http.createServer((req, res)=>{
    console.log("req:",req)
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("Welcome to the server")

});

server.listen(3000,()=>{
    console.log("server is running on port 3000");
});