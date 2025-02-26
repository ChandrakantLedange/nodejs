const path = require("path");

// Note: we can ommit node
//but makes it prefectly cleat that tht import is a node.js builtin module.
// make the import identifier a valid abosolute URL


// console.log(__filename)//C:\Users\ChandrakantChandrabh\OneDrive - Academian India Private Limited\Desktop\Node js\nodejs\BuiltInModules\index.js

// console.log(__dirname)//C:\Users\ChandrakantChandrabh\OneDrive - Academian India Private Limited\Desktop\Node js\nodejs\BuiltInModules

// 1) basename
// console.log(path.basename(__filename));//index.js
// console.log(path.basename(__dirname));//BuiltInModules

//2)extname
// console.log(path.extname(__filename));//.js
// console.log(path.extname(__dirname));//empty string since it does not have .js extention on dirname.

//3) parse
// console.log(path.parse(__filename));
//output will be as below::
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\ChandrakantChandrabh\\OneDrive - Academian India Private Limited\\Desktop\\Node js\\nodejs\\BuiltInModules',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }

// console.log(path.parse(__dirname));
//output will be as below:
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\ChandrakantChandrabh\\OneDrive - Academian India Private Limited\\Desktop\\Node js\\nodejs',
//     base: 'BuiltInModules',
//     ext: '',
//     name: 'BuiltInModules'
//   }


// 4)format
// console.log(path.format(__filename));
//output will be as below:
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\ChandrakantChandrabh\\OneDrive - Academian India Private Limited\\Desktop\\Node js\\nodejs\\BuiltInModules',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }

// console.log(path.format(__dirname))
//output will be as below:
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\ChandrakantChandrabh\\OneDrive - Academian India Private Limited\\Desktop\\Node js\\nodejs',
//     base: 'BuiltInModules',
//     ext: '',
//     name: 'BuiltInModules'
//   }

// 6)isAbsolute
// console.log(path.isAbsolute(__filename))//true
// console.log(path.isAbsolute(__dirname))//true
// console.log(path.isAbsolute("./data.json"))//false because it is relative path


//7) join
// console.log(path.join("folder1","folder2","index.html"));//folder1\folder2\index.html

// console.log(path.join("/folder1","folder2","index.html"));//\folder1\folder2\index.html

// console.log(path.join("/folder1","//folder2","index.html"));//\folder1\folder2\index.html

// console.log(path.join("/folder1","//folder2","../index.html"));//\folder1\index.html

// console.log(path.join(__dirname,"data.json"));C:\Users\ChandrakantChandrabh\OneDrive - Academian India Private Limited\Desktop\Node js\nodejs\BuiltInModules\data.json

//8) resolve
// console.log(path.resolve("folder1","folder2","index2.html"));
// C:\Users\ChandrakantChandrabh\OneDrive - Academian India Private Limited\Desktop\Node js\nodejs\BuiltInModules\folder1\folder2\index.html

console.log(path.join("/folder1","folder2","index.html"))
// \folder1\folder2\index.html