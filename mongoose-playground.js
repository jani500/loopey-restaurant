const mongoose = require("mongoose");

// we are taking the exported Pizza model and storing it in a variable here so we can use it later
const Pizza = require("./models/Pizza.model");

// this connect method returns a promise
mongoose
  .connect("mongodb://127.0.0.1:27017/loopeyRestaurant")
  .then((response) => {
    console.log(
      `Connected to Mongo! Database Name: "${response.connections[0].name}"`
    );

    // Create a new document (a new pizza)
    Pizza.create({ title: "margarita" });
    Pizza.create({ title: "veggie" });

    const pizzaOne = {
      title: "margarita",
      price: 12,
      isVeggie: true,
    };

    // this is an async operation & returns a promise
    return Pizza.create(pizzaOne);
  })

  .then((pizzaFromDB) => {
    console.log("a new pizza was created with id...", pizzaFromDB.__id);

    // this is the Model.find() method which returns all docs in a collection as an array
    // everytime a method returns a promise, we can chain this with .then if we return a promise..
    return Pizza.find();

    // we can also chain this with a query, e.g. Pizza.find({title: "margarita"})
  })

  // we take the result of the previous function and assign it to pizzasArr
  .then((pizzasArr) => {
    console.log("I currently have...", pizzasArr.length);

    // mongoose returns the original document, and not the updated one, unless ou pass thr third argument
    return Pizza.findByIdAndUpdate(
      "//inserObjIDHere",
      { price: 20 },
      { returnDocument: "after" }
    );
  })

  .then((updatedPizzaFromDB) => {
    console.log("Jani, your pizza was updated.");
    console.log(updatedPizzaFromDB);
  });

console.error("Error connecting to Mongo", err);

// for all pizzas with price > 12, set a specific "dough"
//Pizza.updateMany({ price: { $gt: 12 } }, { dough: "classic" }).catch((err) =>
