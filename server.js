var express = require('express'),
		bodyParser = require('body-parser'),
		config = require('./config/config.js'),
		db = require('./config/init.js')

db();

var app = express();

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

var api  = require('./app/routes/api')(app, express);

app.use('/api', api)

app.listen(config.port, function(err){
	if(err){
		console.log(err);
	} else {
		console.log("Server Started " + Date())
	}

})
