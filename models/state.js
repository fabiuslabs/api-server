var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var HouseSchema = new Schema({
  District: String,
  'Member Name': String,
  Party: String
});

var SenateSchema = new Schema({
  'Member Name': String,
  Party: String
});

var StateSchema = new Schema({
  Governor: {
    Name: String,
    Party: String
  },
  Senate: [SenateSchema],
  State: String,
  'U.S. House': [HouseSchema]
});

module.exports = mongoose.model('State', StateSchema, 'states');
