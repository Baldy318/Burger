var orm = require('../config/orm.js');

var burger = {
  selectAll: function(callback){
    orm.selectAll('burgers', function(res){
      callback(res);
    });
  },
  getMenu: function(callback){
    orm.selectAll('menu', function(res){
      callback(res);
    });
  },
  insertOne: function(val, callback){
    orm.insertOne('burgers', 'burger_name', val, function(res){
      callback(res);
    });
  },
  updateOne: function(colVal, conditionVal, callback){
    orm.updateOne('burgers', 'devoured', colVal, 'id', conditionVal, function(res){
      callback(res);
    });
  },
  deleteOne: function(conditionVal, callback){
    orm.deleteOne('burgers', 'id', conditionVal, function(res){
      callback(res);
    });
  }
};

module.exports = burger;
