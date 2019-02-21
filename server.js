// Dependencies
var express = require('express');
var path = require('path');

// Server
var app = express();
	app.use(function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});
	app.use('/', express.static(path.join(__dirname, 'public')))
	app.listen(5000, function() {
		console.log('Server started');
	});
