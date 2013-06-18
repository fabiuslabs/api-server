var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var LeaderSchema = new Schema({
  Country: String,
  Leader: {
    NAME: String,
    TITLE: String,
    URL: String
  }
});

module.exports = mongoose.model('Leader', LeaderSchema, 'leaders');
