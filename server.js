var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
//create server
app.use(express.static(__dirname + '/PWADemo'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + path.normalize('/PWADemo/index.html'));
});

app.listen(3000, function () {
    console.log('Server started');
});