var Hapi = require('hapi');

var pkgInfo = require('../package.json');

var internal = {};

var S = Hapi.Types.String;
var N = Hapi.Types.Number;

// this is used as single store of path validations which can be used in routes
internal.pathSchema = {
  path: {
  }
};

var rootHandler = function (request) {
  request.reply.view('index', {
    title: 'Index', message: 'Index - Hello World!', version: pkgInfo.version
  }).send();
};

var aboutHandler = function (request) {
  request.reply.view('about', {
    title: 'About', message: 'About - Hello World!', version: pkgInfo.version
  }).send();
};

exports.registerRoutes = function (server, config) {
  // Serve the public folder with listing enabled
  server.route({ method: 'GET', path: '/{path*}', handler: { directory: { path: './public/'} } });

  server.route({ method: 'GET', path: '/', handler: rootHandler });
  server.route({ method: 'GET', path: '/about', handler: aboutHandler });
};
