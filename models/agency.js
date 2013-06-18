var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var AgenciesSchema = new Schema({
  NAME: String
});

var AgencySchema = new Schema({
  "Agency Type": String,
  Agencies: [AgenciesSchema]
});

module.exports = mongoose.model('Agency', AgencySchema, 'agencies');
