
var port = 8080;
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(port);
console.log("http://localhost:" + port);
