const addFn = require('./add');

console.log("Hello from index file");
const sum = addFn(1,2);
const sum2 = addFn(1,4);
console.log(sum);//3
console.log(sum2);//5

//import exports patterns
const addFun = require('./math');
console.log(addFun(3,2)); //5
console.log(addFun(3,3)); //6

const substractFun = require('./math');
console.log(substractFun(3,2)); //5


