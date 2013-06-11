// - Dependencies
var express = require('express'),
    fs      = require('fs'),
    path    = require('path'),
    util    = require('util'),
    app     = express(),
    post    = require('./lib/post')
    //md5     = require('MD5')

port = 8080;

// - Server Settings
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.query());
app.use(express.bodyParser({uploadDir: __dirname + '/tmp'}));
app.use(express.cookieParser("whateveryouwantmetobe"));
app.use(express.methodOverride());

var allowCrossDomain = function(req, res, next) {

  var allowedOrigins = [
    'http://localhost.api.lincolnlabs.com:8080'
  ];

  var origin = req.headers.origin;

  if(allowedOrigins.indexOf(origin) < 0) {
    next();
  }

  res.header('Access-Control-Allow-Origin',  origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-Requested-With, X-File-Name, Content-Type, Content-Encoding, File-Type, Origin, X-Resource-Type, X-Resource-Id, X-Auth-Token');
  res.header('Access-Control-Allow-Credentials', true);

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }

  else {
    next();
  }
};
app.use(allowCrossDomain);

app.use(express.session());

app.get('*', function(req, res) {

  res.render('index', {
    layout: false
  });
});

// - Start Up Server

app.listen(port);

util.log("Express server instance listening on port " + port);
