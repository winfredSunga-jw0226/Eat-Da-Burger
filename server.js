var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import the routes and give the server access
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

//start the server
app.listen(port, function() {
  console.log("listening at port: " + port);
});

console.log("Hello");