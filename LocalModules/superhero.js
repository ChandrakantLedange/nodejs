require('./batman');
require('./superman');

//nodejs work as IIFE() Imediate Invoked Function Expression as below for each module

(function(){
    const iifeFun = "iife called";
console.log(iifeFun);
})();