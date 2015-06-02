// This is the main file of our chat app. It initializes a new 
// express.js instance, requires the config and routes files
// and listens on a port. Start the application by running
// 'node app.js' in your terminal

var pg = require('pg');
var express = require('express'),
	app = express();

// This is needed if the app is run on heroku:

var port = process.env.PORT || 8080;

// Initialize a new socket.io object. It is bound to 
// the express app, which allows them to coexist.

var io = require('socket.io').listen(app.listen(port));

// Require the configuration and the routes files, and pass
// the app and io as arguments to the returned functions.

require('./config')(app, io);
require('./routes')(app, io);
var pg = require('pg');
var conString = "postgres://otadthilhxfiqv:sVgqucfFBBijtv9fFKaEAGnAIa@ec2-54-163-238-96.compute-1.amazonaws.com:5432/d59eb19fu1hs81";
var dataclinet = new pg.Client(conString);
dataclinet.connect();
dataclinet.query('SELECT * FROM test', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
});
console.log('Your application is running on http://localhost:' + port);
console.log('Your application is running on http://localhost:' + port);