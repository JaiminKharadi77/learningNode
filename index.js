// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", () => console.log("Pizza is being baked"));

// emitter.emit("order-pizza");

// // passing the argument

// emitter.on("order-pizzaArg", (size, topping) =>
//   console.log(`${size} Pizza is being baked with ${topping} topping`)
// );

// emitter.on("order-pizzaArg", (size) => {
//   if (size === "Large") console.log("Serving Drink Complimentry");
// });

// emitter.emit("order-pizzaArg", "Large", "Mushroom");

// // will run both functions of event listener order-pizzaArg

const PizzaShop = require("./pizza-shop");

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping) => {
  console.log(`${size} Pizza is being baked with ${topping} topping`);
});

pizzaShop.order("Large", "Mushroom");

pizzaShop.displayOrderNumber();
