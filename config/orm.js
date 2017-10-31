var connection = require("./connection.js");

//Object for all SQL statement function needed in this app
var orm = {
  selectAll : function(tableInput, cb) {
    //create the query string
    var queryString = `SELECT * FROM ${tableInput};`;
    //execute the query against the db
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      //call the callback function
      cb(result);
    });
  },
  insertOne : function(table, col, val, cb) {
    //create the query string
    var queryString = `INSERT INTO ${table} (${cols})
      VALUES (${val});`;

    //checking the query string
    console.log("Insert One Query String : " + queryString);

    //execute the query against the db
    connection.query(queryString, vals)
  },
  updateOne : function(table, col, val, condition, cb) {
    //create the query string
    var queryString = `UPDATE ${table} 
      SET ${col} = ${val}
      WHERE ${condition};`;
  }
};

module.exports = orm;