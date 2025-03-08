const http  = require("node:http");

const server = http.createServer((req, res)=>{
    // console.log("req:",req)

    const superHero ={
        firstName : 'superman',
        lastName : 'batman'
    }
    res.writeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify(superHero));

});

server.listen(3000,()=>{
    console.log("server is running on port 3000");
});