/*
 * written by mohsen.shaali
 * Date : 08/03/2015
 * The main APP
 */
 
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var routes = require('./routes');
var api = require('./routes/api');
var path = require('path');
var bodyParser = require("body-parser");

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // serving static files


//------------------routing HTTP--------------------
// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// API Name
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

app.post('/exposed', require('./routes/exposed'));
//------------------routing HTTP--------------------

//------------------Handle Socket.io---------------
io.sockets.on('connection', require('./routes/socket'));
//------------------Handle Socket.io---------------

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));      
});


