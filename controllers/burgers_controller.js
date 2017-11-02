//require express
var express = require("express");

//import the model of burger.js to use its database functions
var burger = require("../models/burger.js");

var router = express.Router();

// //Let's create all of our routes for the app
router.get("/", function(req, res) {
  console.log('router working')
  burger.selectAll(function(data) {
    console.log(data);
    //assign the data coming from the db into an object variable
    var burgerObject = {
      burgers : data
    };
    console.log('serving index page')
    //render the html using the index template, passing data along with the response
    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body);

  //run the query against the model
  burger.insertOne("burger_name", req.body.name, function(result) {
    res.json({id : result.insertedId});
  });
});

router.put("/api/burgers/:id", function(req, res) {
  console.log("the server caught the put request!!!");
  var whereCondition = `id = ${req.params.id}`;

  console.log("where condition : " + whereCondition);

  //run the query against the model
  burger.updateOne("devoured", true, whereCondition, function(result) {
    //console.log(result);
    //if no rows were changed, return status 404
    if(result.changedRows == 0) {
      return res.status(404).end();
    } 
    //else return status 200
    else {
      res.status(200).end();
    }
  });
});

module.exports = router;