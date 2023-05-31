// include our express package and store in a variable
const express = require("express");
const hbs = require("hbs");
// create a new express app and assign to variable called app

const app = express();

// makes everything inside of /public available
app.use(express.static("public"));

// tell our express app where to look for our views
app.set("views", __dirname + "/views");

// sets HBS as the template engine
app.set("view engine", "hbs");

// tell HBS which directory we use for partials
hbs.registerPartials(__dirname + "/views/partials");

// this is the general syntax for all get requests... You specify route and function or code to run
// app.get(path, code);

// we use an anonymous function here
// this tells express, whenever we receive a get request here, execute this function
/* app.get("/about", function () {
  console.log("Meow!");
});

app.get("/home", function () {
  console.log("home page!");
}); */

app.get("/home", function (request, response, next) {
  /*  console.log(request.path);
  console.log(request.baseUrl);
  console.log(request.protocol); */
  response.render("home-page");
});

app.get("/contact", (req, res, next) => {
  res.sendFile(__dirname + "/views/contact-page.html");
});

app.get("/pizza", (req, res, next) => {
  res.send("This is a test");
});

app.get("/pizza/veggie", (req, res, next) => {
  const info = {
    userName: "Zola",
    pizza: "Veggie",
    price: "$12.99",
    img: "/images/home.jpeg",
    ingredients: ["dough", "mozarrela", "tomato sauce"],
  };

  res.render("product", info);
});

// we can render the product view like this
app.get("/pizza/margarita", (req, res, next) => {
  // here we need to put the name of the file WITHOUT extension

  const info = {
    userName: "Zola",
    pizza: "Margarita",
    price: "$9.99",
  };

  res.render("product", info);
});

app.get("/pizza/seafood", (req, res, next) => {
  const info = {
    userName: "Zola",
    pizza: "Seafood",
    price: "$15.99",
  };

  res.render("product", info);
});

// port is a point where you can send / receive info...
// this is where we start a server

app.listen(3000);
