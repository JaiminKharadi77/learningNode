import { upperCase } from "upper-case";

function greet(name) {
  console.log(upperCase(`Hello ${name}, welcome to Codevolution`));
}

export { greet };

// npm install -g nodemon installing global pacakages
// npm uninstall -g nodemon uninstalling global packages
