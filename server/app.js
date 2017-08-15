// import files and packages up here
var dataTopSpots = require('./data.json');

// create your express server below
var express = require('express');
var app = express();

// add your routes and middleware below
var morgan = require('morgan');
app.use(morgan('dev'));

app.get('/data', function(req, res){
  res.json(dataTopSpots);
});

app.get('/', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end();
});

// finally export the express application
module.exports = app;
