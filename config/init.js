var mongoose = require('mongoose');
var config = require('./config');

function init() {
    mongoose.connect(config.database, function(err, res) {
        if (err) {
            console.log('ERROR: connecting to Database. ' + err);
        }
    })
}

module.exports = init;
