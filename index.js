// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => console.log("this is setTimeout 2"), 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);

// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => {
//   console.log("this is setTimeout 2");
//   process.nextTick(
//     console.log.bind(console, "this is the inner next tick inside setTimeout")
//   );
// }, 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);


setTimeout(() => console.log("this is setTimeout 1"), 1000);
setTimeout(() => console.log("this is setTimeout 2"), 0);
setTimeout(() => console.log("this is setTimeout 3"), 500);


// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside next tick")
//   );
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
//   );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));
