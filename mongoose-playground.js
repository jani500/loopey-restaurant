const { mongoose, Schema } = require("mongoose");

// create Schema
const pizzaSchema = new Schema({ title: String });

// Create Model
const Pizza = mongoose.model("Pizza", pizzaSchema);

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
    };

    // this is an async operation & returns a promise
    return Pizza.create(pizzaOne);
  })

  .then((pizzaFromDB) => {
    console.log("a new pizza was created with id...", pizzaFromDB.__id);

    // this is the Model.find() method which returns all docs in a collection as an array
    // everytime a method returns a promise, we can chain this with .then if we return a promise..
    return Pizza.find();
  })

  // we take the result of the previous function and assign it to pizzasArr
  .then((pizzasArr) => {
    console.log("I currently have...", pizzasArr.length);
  })
  .catch((err) => console.error("Error connecting to Mongo", err));
