const fs = require("node:fs");

const fileContents = fs.readFileSync("./file.txt", "utf-8");

// console.log(fileContents.toString());
console.log(fileContents);

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

fs.writeFileSync("./greet.txt", "Hello World!");

fs.writeFile("./greet.txt", "Hello Jaimin", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File Wriiten");
  }
});


// Below code will add it instead of overting the code
fs.writeFile("./greet.txt", " Hi Mr. Kharadi",{flag:"a"}, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File Wriiten");
    }
  });
  