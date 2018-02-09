var http = require('http');
var express = require('express');
var path = require('path');
var nconf = require('nconf');
var request = require('request');

//load config file
nconf.env().file({
    file: 'config.json'
});
var config = nconf.get();

//initialize express
var app = express();

app.use(express.static(__dirname + '/client/PWADemo'));
//routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + path.normalize('/client/PWADemo/index.html'));
});

app.get('/popular-movies', function (req, res) {
    const options = {
        url: 'http://api.themoviedb.org/3/discover/movie?api_key=' + config.API_KEY + '&sort_by=popularity.desc',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    }
    request(options, function (req2, res2, body) {
        res.send(body);
    });
});

app.listen(3000, function () {
    console.log('Server started at ' + new Date());
});