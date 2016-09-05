var express = require('express');
var os = require("os");

var app = express();
var hostname = os.hostname();

app.get('/', function (req, res) {
  res.send('<html><body>Hello Kennel Club! Request served by container ' + hostname + '</body></html>');
});

app.listen(8080);
console.log('Running on http://localhost');
