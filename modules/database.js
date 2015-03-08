var mysql = require('mysql');
var connection_details ={
  host     : 'localhost',
  user     : 'root',
  password : ''
};

module.exports = function() {   
    var conn = mysql.createConnection(connection_details); 	
    this.connection = function() {
        return conn;
    };
};