
var fs = require('fs');

var filename = "index.html";
var str = fs.readFileSync(filename);
var buffer = new Buffer(str, "utf-8");


var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
