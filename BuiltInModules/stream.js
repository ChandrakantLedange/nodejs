const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt",{
    encoding:'utf-8',
    highWaterMark:2, // 2 byte only stream at a time.
});


const writetableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data",(chunk)=>{
    console.log("chunk:",chunk);
    writetableStream.write(chunk);//chunk: Hello from text file

})


//Types of streams

// 1) Readable streams from which data can be read.
// 2) Writable streams to which we can write data.
// 3) Duplex streams that are both Readable and Writable.
// 4) Transform streams that can modify or transform the data as it is written a nd read 