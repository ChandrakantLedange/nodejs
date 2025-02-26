//import export patterns
//1)
const add =(a,b)=>{
    return a+b;
}

module.exports = add;

// 2)

// module.exports = (a,b)=>{
    //     return a+b
    // }
    
    const substract = (x,y)=>{
        return x - y;
    };
    
    module.exports = substract;

//3 
// module.exports= {
//     add : add,
//     substract : substract
// }
