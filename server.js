var http = require('http');
var json = require('json');
var events = require('events');
var sys = require('sys');

http.createServer(function (request, response) {
  var body = "";
  
  request.addListener('data', function(chunk){
    body += chunk;
  });
  
  request.addListener('end', function(){
    console.log(JSON.parse(body));
  });
}).listen(8080);
console.log('Server running at http://localhost:8080/');