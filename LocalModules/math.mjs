//ES imports
// 1)
// import add from './math-ems.mjs';

// console.log(add(10,2));//12

// 2)
// import addFun from "./math-ems.mjs";
// console.log(addFun(12,3))//15

//3)
// import math from "./math-ems.mjs";
// console.log(math.add(3,8));//11



// 4)
import *as math from "./math-ems.mjs";

const {add,sub} = math;
console.log(math.add(3,0));//3
console.log(math.sub(7,5));//2