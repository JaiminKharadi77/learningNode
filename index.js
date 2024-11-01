// const superHero = require("./super-hero");

// console.log(superHero.getName());

// superHero.setName("SuperMan");

// const newSuperHero = require("./super-hero");
// console.log(newSuperHero.getName());  // Firt Part of the Video

// second Part Of the Video
const SuperHero = require("./super-hero");

const batman = new SuperHero("Batman");
console.log(batman.getName());
batman.setName("Bruce Wayne");
console.log(batman.getName());

const superman = new SuperHero("SFuperman");
console.log(superman.getName());
superman.setName("Clerk Kent");
console.log(superman.getName());
