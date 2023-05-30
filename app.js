// include our express package and store in a variable
const express = require("express");

// create a new express app and assign to variable called app

const app = express();

// makes everything inside of /public available
app.use(express.static("public"));

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

app.get("/", function (request, response, next) {
  /*  console.log(request.path);
  console.log(request.baseUrl);
  console.log(request.protocol); */
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/contact", (req, res, next) => {
  res.sendFile(__dirname + "/views/contact-page.html");
});

// port is a point where you can send / receive info...
// this is where we start a server

app.listen(3000);
