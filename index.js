const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));


/** Experiment 7 - Timer anamoly. Order of execution can never be guaranteed */

// setTimeout(() => console.log("this is setTimeout 1"), 0);

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });



/** Experiment 8 - I/O queue callbacks are executed after Microtask queues callbacks and Timer queue callbacks are executed */


fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

for (let i = 0; i < 1000000000; i++) {}