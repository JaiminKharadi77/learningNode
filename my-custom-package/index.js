import { upperCase } from "upper-case";

function greet(name) {
  console.log(upperCase(`Hello ${name}, welcome to Codevolution`));
}

export { greet };