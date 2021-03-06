'use strict';

var express  = require('express'),
    http     = require('http'),
    path     = require('path'),
    app      = express(),
    mongoose = require('mongoose');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

// Database
mongoose.connect('mongodb://localhost/ideasbucket');

// Loading models
require('./app/models/idea');

// Loading controllers
var controllers = require('./app/controllers');

// Loading routes
require('./config/routes')(app, controllers);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
