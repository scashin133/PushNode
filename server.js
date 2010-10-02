var http = require('http');
var json = require('json');
var events = require('events');
var sys = require('sys');
var port = 8098;
http.createServer(function (request, response) {
  
  if (request.method == "POST"){
    var body = "";

    request.addListener('data', function(chunk){
      body += chunk;
    });

    request.addListener('end', function(){
      console.log(JSON.parse(body));
    });
  }
  
  response.end();
  
}).listen(port);
console.log('Server running at http://localhost:' + port + '/');