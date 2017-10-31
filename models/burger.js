var orm = require("../config/orm.js");

var burger = {
  selectAll : function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  insertOne : function(col, val, cb) {
    orm.insertOne("burgers", col, val, function(res) {
      cb(res);
    });
  },
  updateOne : function(col, val, condition, cb) {
    orm.updateOne("burgers", col, val, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;