
var User = require('../models/user');
var config = require('../../config/config');
var crypto = require('crypto')
var secretKey = config.secretKey
var cypher = crypto.createCipher('aes-256-cbc', secretKey)
var cookieParser = require('cookie-parser')

module.exports = function(app, express){
	var api = express.Router();
	//API FOR SIGNUP USER
	api.post('/signup/:username', function(req,res){
		cypher.update(req.body.password, 'utf-8', 'base64')
		var encrypted = cypher.final('base64')
		var user = new User({
			name: req.query.name,
			username: req.params.username,
			password: encrypted
		});

		user.save(function(err){
			if(err){
				res.send(err);
			}
			res.json({ message:`Usuario ${req.params.username} creado`});
		});
	})

	//API FOR USER LOGIN
	api.post('/login', function(req,res){
		User.findOne({
			username: req.query.username
		}).select('password').exec(function(err,user){
			if(err) throw error;

			if(!user){
				res.send({message:"User Does not Exist"})
			} else if (user){

				var validPassword = user.comparePassword(req.body.password, user.password)

				if(!validPassword){
					res.send({message:"Invalid Password"})
				} else {

					//Login
					//Generate token or cookie
					var randomNumber=Math.random().toString();
					randomNumber=randomNumber.substring(2,randomNumber.length);
					res.cookie('session' , randomNumber, {maxAge: 900000, httpOnly: true})
					res.json({
						token: req.cookies.session
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
