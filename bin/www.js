var app = require('../app');
var debug = require('debug')('simulador:server');
var http = require('http');

var port = '8080';
app.set('port', port);

var server = http.createServer(app);
server.listen(port);