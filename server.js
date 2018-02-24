var http = require('http');
var express = require('express');
var path = require('path');
var nconf = require('nconf');
var request = require('request');
var formidable = require('formidable');

//load config file
nconf.env().file({
    file: 'config.json'
});
var config = nconf.get();

//initialize express
var app = express();


if (process.env.npm_config_build != 'production') {
    app.use(express.static(__dirname + '/client/PWADemo'));
} else {
    app.use(express.static(__dirname + '/client/PWADemo/build/production/PWADemo'));
    app.use(express.static(__dirname + '/client/PWADemo/build/production/PWADemo/classic'));
}

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

app.post('/movie-video', function (req, res) {
    // console.log(req);
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var movie_id = JSON.parse(fields['movie_id']);
        const options = {
            url: 'https://api.themoviedb.org/3/movie/' + movie_id + '/videos?api_key=' + config.API_KEY + '&language=en-US',
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
});

app.listen(3000, function () {
    console.log('Server running in port 3000 started at ' + new Date());
});