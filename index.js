var Hapi = require('hapi')
  , presentations = require('./lib');

var options = {
  views: {
    path: __dirname + '/views',
    cache: false, // disabled during development
    engines: {
      'jade': {module: 'jade', extension: 'jade'}
    },
    compileOptions: {
      pretty: true
    }
  }
};

// create the server
var server = new Hapi.Server('localhost', 10000, options);

// register routes
presentations.registerRoutes(server, options);

var goodOptions = {
  subscribers: {
    console: ['ops', 'request', 'log']
  }
};

server.plugin.require('good', goodOptions, function (err) {

  if (!err) {
    // Plugin loaded successfully
  }
});

server.start(function () {
  console.log('server started on port: ', server.settings.port);
});