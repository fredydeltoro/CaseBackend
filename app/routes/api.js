
var User = require('../models/user');
var config = require('../../config/config');

var secretKey = config.secretKey

module.exports = function(app, express){
	var api = express.Router();

	api.get('/', function (req, res) {
		res.json({message : 'provando el servidor'})
	})

	//API FOR SIGNUP USER
	api.post('/signup/:username', function(req,res){
		var user = new User({
			name: req.query.name,
			username: req.params.username,
			password: req.body.password
		});

		user.save(function(err){
			if(err){
				res.send(err);
			}
			res.json({ message:'Usuario creado'});
		});
	})

	//API FOR USER LOGIN
	api.post('/login', function(req,res){
		User.findOne({
			username: req.query.username
		}).selet('pasword').exec(function(err,user){

			if(err) throw error;

			if(!user){
				res.send({message:"User Does not Exist"})
			} else if (user){

				var validPassword="Método";

				if(!validPassword){
					res.send({message:"Invalid Password"})
				} else {

					//Login
					//Generate token or cookie

					res.json({
						token: "token goes here"
					})
				}
			}


		})
	})

	//MIDDLEWARE
	app.use(function (req, res, next) {
		console.log(req.path);
		console.log('Request Type: '+ req.method);
		next();
	})
	//MIDDLEWARE

	return api;
}
