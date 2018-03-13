var http = require('http');
var hello1 = require('./hello')
var hello2 = require('./hello2')

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(hello2.message());
});

server.listen(port, hostname, function(){
  console.log('Server running at http://'+hostname + ':'+port);
})
