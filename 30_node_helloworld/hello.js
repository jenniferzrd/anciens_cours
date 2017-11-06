// Load the http module to create an http server.
// var http = require('http');
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/about', function(req, res){
  res.send('page about');
});
// ci-dessous, le hello world classique issu de la doc officielle
// var server = http.createServer(function (request, response) {
//   response.writeHead(200, {"Content-Type": "text/html"});
//   response.end("<div>Hello World</div>");
// });

// Listen on port 8000, IP defaults to 127.0.0.1
// server.listen(9999);
app.listen(9999);
// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:9999/");
