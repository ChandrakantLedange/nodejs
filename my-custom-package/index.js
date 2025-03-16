const { Case } = require('change-case-all');

function greet(name){
    return console.log(Case.upper(`Hello ${name}, Welcome to custom package json`));
}

greet("node js");
module.exports = greet;


//create package.json file
//>npm init

//> npm init --yes - create file direct with default setup