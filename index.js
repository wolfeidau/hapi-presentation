var Hapi = require('hapi')
  , presentations = require('./lib')
  , config = require('config.json');

var http = new Hapi.Server('localhost', 8000, config);

// register routes
presentations.registerRoutes(http, config);

// Start server
http.start();
