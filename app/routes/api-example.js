
var Product = require('../models/product');
var config = require('../../config');

module.exports = function(app, express){
	var api = express.Router;

	api.get('/product', function(req,res){
		Product.find({}, function(err,users){
			if(err){
				res.send(err);
				return;
			}
			//
			res.json(Product);
		})
	})

	return api;	
}