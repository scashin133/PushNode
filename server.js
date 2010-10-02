var http = require('http');
var json = require('json');
var events = require('events');
var sys = require('sys');
var port = 8098;
http.createServer(function (request, response) {
  var body = "";
  
  request.addListener('data', function(chunk){
    body += chunk;
  });
  
  request.addListener('end', function(){
    console.log(JSON.parse(body));
  });
}).listen(port);
console.log('Server running at http://localhost:' + port + '/');