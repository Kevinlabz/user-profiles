// MODULES
var express = require('express');
var bodyParser = require('body-parser');
// we want to remember our user state before and after requests
var session = require('express-session');
var cors = require('cors');
var config = require('./config');
var profilecontroller = require('./controllers/profilecontroller.js');
var usercontroller = require('./controllers/usercontroller.js');
var app = express();

var corsOptions = {
	origin: 'http://localhost:8989'
};

app.use(bodyParser.json());

//This allows the cross scripting to other site.
app.use(cors(corsOptions));


app.get('/example', cors(), function( req, res ) {
  //This route is CORS enabled across all origins
});

app.get('/example-two', function( req, res ) {
  //This route is not CORS enabled
});