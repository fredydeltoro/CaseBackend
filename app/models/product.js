
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema ({
	name:String,
	weight:String,
	country:String,
	state:String,
	type:String,
	isAvailable:boolean
});

module.exports = mongoose.model('Product', ProductSchema);