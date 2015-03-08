/*
 * written by mohsen.shaali
 * Date : 08/03/2015
 * Exposing the endpoint for JASON submissions
 */

var mysql = require('mysql');
var Databse = require('../modules/database'); 
var validator = require('validator');
var dateFormat = require('dateformat');

module.exports = function(req,res){    
  if(
     validator.isInt(req.body.userId) &&
     !validator.isNumeric(req.body.currencyFrom) &&
	 !validator.isNumeric(req.body.currencyTo) &&
	 validator.isFloat(req.body.amountSell) &&
	 validator.isFloat(req.body.amountBuy) &&
	 validator.isFloat(req.body.rate) &&
	 validator.isDate(req.body.timePlaced) &&
	 !validator.isNumeric(req.body.originatingCountry))
  {	  
    writeToDb(req.body);	
    res.end("OK");	
  }else{
	 res.end("NOK");	 	 	
  }  
};

function writeToDb(JSON){
  var db = new Databse();
  var dbconn = db.connection();	
  dbconn.connect();
  dbconn.query('USE currency', function(err) {
  if (err) throw err;
  });	 
  var sql = 'INSERT INTO currency.rate_history'+
            '(user_id, currency_from, currency_to, amount_sell, amount_buy, rate, time_placed, originating_country) VALUES'+          
			'(?, ?, ?, ?, ?, ?, ?, ?);';	 			
  var inserts = [JSON.userId, JSON.currencyFrom, JSON.currencyTo, JSON.amountSell, JSON.amountBuy, JSON.rate, dateFormat(JSON.timePlaced, "yyyy-mm-dd h:MM:ss"), JSON.originatingCountry];
  sql = mysql.format(sql, inserts);
   dbconn.query(sql, function(err, rows, fields) {
     if (err) throw err;
	 console.log("inserted");
   });  
}