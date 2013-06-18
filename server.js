// - Dependencies
var fs       = require('fs'),
    mongoose = require('mongoose'),
    path     = require('path'),
    restify  = require('restify')
    util     = require('util'),
    port     = 8080;

mongoose.connect('mongodb://api.lincolnlabs.com/test');

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

var server = restify.createServer({
  name: 'api.lincolnlabs',
  version: '0.0.1'
});
  
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.fullResponse())

var Agency = require('./models/agency'),
    Leader = require('./models/leader'),
    limit  = 10;

// Get all agencies by name

server.get('/agencies/name/:name', function(req, res, next) {

  var regex = new RegExp(req.params.name);

  Agency
    .find({'Agencies.NAME': regex})
    .limit((req.params.limit || limit))
    .exec(function(err, leaders) {
      res.send(leaders);
    });

});

// Get all agencies by type

server.get('/agencies/type/:type', function(req, res, next) {

  var regex = new RegExp(req.params.name);

  Agency
    .find({'Agency Type': regex})
    .limit((req.params.limit || limit))
    .exec(function(err, leaders) {
      res.send(leaders);
    });

});

// Get all agencies

server.get('/agencies', function(req, res, next) {

  var regex = new RegExp(req.params.name);

  Agency
    .find()
    .limit((req.params.limit || limit))
    .exec(function(err, leaders) {
      res.send(leaders);
    });

});

// Get all leaders by country

server.get('/leaders/country/:country', function(req, res, next) {

  var regex = new RegExp(req.params.name);

  Leader
    .find({'Country': regex})
    .limit((req.params.limit || limit))
    .exec(function(err, leaders) {
      res.send(leaders);
    });

});

// Get all leaders by name

server.get('/leaders/name/:name', function(req, res, next) {

  var regex = new RegExp(req.params.name);

  Leader
    .find({'Leader.NAME': regex})
    .limit((req.params.limit || limit))
    .exec(function(err, leaders) {
      res.send(leaders);
    });

});

// Get all leaders by title

server.get('/leaders/title/:title', function(req, res, next) {

  var regex = new RegExp(req.params.name);

  Leader
    .find({'Leader.TITLE': regex})
    .limit((req.params.limit || limit))
    .exec(function(err, leaders) {
      res.send(leaders);
    });

});

// Get all leaders

server.get('/leaders', function(req, res, next) {

  var regex = new RegExp(req.params.name);

  Leader
    .find()
    .limit((req.params.limit || limit))
    .exec(function(err, leaders) {
      res.send(leaders);
    });

});

server.listen(port);
