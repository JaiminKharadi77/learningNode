function greet(name) {
  console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
  const name = "Jaimin";
  callback(name);
}

higherOrderFunction(greet); // passing fn as an argument
