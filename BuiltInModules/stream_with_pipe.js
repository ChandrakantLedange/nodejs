const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt",{
    encoding:'utf-8',
    highWaterMark:2, // 2 byte only stream at a time.
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
const writetableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writetableStream);



