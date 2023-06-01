//const { mongoose, Schema } = require("mongoose");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema

// We can use mongoose to enforce data consistency
const pizzaSchema = new Schema({
  title: String,
  price: {
    type: Number,

    // set this as a mandatory / required field
    required: true,
  },
  isVeggie: {
    type: Boolean,
    default: false,
  },
  ingredients: [String],
  imageFile: String,

  dough: {
    type: String,
    enum: ["classic", "extra thin"],
  },
});

// Create Model
const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
