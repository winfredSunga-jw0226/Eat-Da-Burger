//require express
var express = require("express");

//import the model of burger.js to use its database functions
var burger = require("../models/burger.js");

var router = express.Router();

// //Let's create all of our routes for the app
router.get("/", function(req, res) {

  burger.selectAll(function(data) {
    console.log(data);
    //assign the data coming from the db into an object variable
    var burgerObject = {
      burgers : data
    };
    //render the html using the index template, passing data along with the response
    res.render("index", burgerObject);
  });
});

module.exports = router;