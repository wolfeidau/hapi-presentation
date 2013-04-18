var Hapi = require('hapi');

var pkgInfo = require('../package.json');

var internal = {};

var rootHandler = function (request) {
  request.reply.view('index', {
    title: 'Presentation'
  }).send();
};

exports.registerRoutes = function (server, config) {
  // Serve the public folder listing disabled
  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: { directory: { path: './public/'} },
    config: {cache: {mode: 'client', expiresIn: 3600000}} // caching is a config option!
  });

  // normal routes
  server.route({ method: 'GET', path: '/', handler: rootHandler });
};
