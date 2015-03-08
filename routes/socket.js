/*
 * written by mohsen.shaali
  * Date : 08/03/2015
 * Serve content over socket.io
 */
var Databse = require('../modules/database'); 
var mysql = require('mysql');
var from_currency = "EUR"; // defaulting to EURO

module.exports = function (socket) {
  socket.emit('send:name', {
    name: 'market data'
  });
  
  socket.on('currency.type', function (data) {
    from_currency = data.CURRENCY_TYPE; // get currency type from client	
  });

  setInterval(function () {     
     var db = new Databse();
     var dbconn = db.connection();	
     dbconn.connect();
	 dbconn.query('USE currency', function(err) {
     if (err) throw err;
     });	 
	 var sql = 'select currency_to as currency, max(rate) as rate from currency.rate_history where currency_from = ? group by currency_from, currency_to';	 
	 var inserts = [from_currency];
	 sql = mysql.format(sql, inserts);	 	 	
	 dbconn.query(sql, function(err, rows, fields) {
     if (err) throw err;
	 
	 var currency = [];
	 var rates = [];
	 
	 rows.forEach(function(row, i) {			
	 currency.push(row.currency);
	 rates.push(row.rate);
	 });
	 	 
	 socket.emit('send:market.currencies', {     
	    market_data: JSON.stringify(currency)	
        }); 	 	     
     	 
	 socket.emit('send:market.rates', {     
	    market_data: JSON.stringify(rates)	
        }); 	 	     
     });
    dbconn.end();	 	 	     
  }, 1000);
  getCurrencies(socket);  
};


function getCurrencies(socket) {  		
	 var db = new Databse();
     var dbconn = db.connection();	
     dbconn.connect();
	 dbconn.query('USE currency', function(err) {
     if (err) throw err;
     });	 
	 
	 var sql = 'select currency_from as currency from currency.rate_history where 1 group by currency_from';	 	 	 
	 dbconn.query(sql, function(err, rows, fields) {
     if (err) throw err;
	 
	 var currs = [];
	 rows.forEach(function(row, i) {		
	 currs.push(row.currency);
	 });

     socket.emit('send:currency', {     
	    currs: JSON.stringify(currs)
        }); 	 
     });

    dbconn.end();	 	 	     
  }
