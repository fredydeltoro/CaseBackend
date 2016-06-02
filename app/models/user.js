
var mongoose = require('mongoose');
var config = require('../../config/config');
var crypto = require('crypto')
var secretKey = config.secretKey
var decypher = crypto.createDecipher('aes-256-cbc', secretKey)
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
	name:String,
	username:{
		type:String,
		required: true,
		index:{
			unique:true
		}
	},
	password:{
		type:String,
		required: true,
		select:false
	}
});

UserSchema.post('save', function(){
})

UserSchema.methods.comparePassword = function (candidatePassword, password) {
	try {
		decypher.update(password, 'base64', 'utf8');
		var decifered = decypher.final('utf8');
		if (decifered === candidatePassword ) {
			return true
		}else{
			return false
		}
	} catch (e) {
		console.log(e.message);
	} finally {

	}
}

module.exports = mongoose.model('User', UserSchema);
