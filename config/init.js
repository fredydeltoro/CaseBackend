var mongoose = require('mongoose');

function init() {
    mongoose.connect('mongodb://localhost/test', function(err, res) {
        if (err) {
            console.log('ERROR: connecting to Database. ' + err);
        }
    })
}

module.exports = init;
