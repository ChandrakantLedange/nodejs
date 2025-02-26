// const superHero = require('./super-hero');

// console.log(superHero.getName());// batman
// superHero.setName("superMan");
// console.log(superHero.getName());// superMan


// const newSuperHero = require('./super-hero'); //when this line runs and node remember this has been imposed before and starts from there, so last updated name is superMan
// console.log(newSuperHero.getName());// superMan - module caching


// ********* If you don't want to store value in cache then import class here and create instance as below
const superHero = require('./super-hero');

const superHeroNew = new superHero("spiderMan");
console.log(superHeroNew.getName());//spiderMan
superHeroNew.setName("ironMan");
console.log(superHeroNew.getName());//ironMan

const newSuperHero = require('./super-hero');

const finalSuperHero = new newSuperHero("gentleMan");
console.log(finalSuperHero.getName());//gentleMan



