var express = require('express');
var babelRegister = require('babel-register');
var mustache = require('mustache-express');

babelRegister();
var app = express();

var Config = require('./server.config.js');
var Controllers = require('./server/controllers.js');

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/dist');

app.get('/', Controllers.index);

// This should be prioritized last
app.use(express.static('dist'));

app.listen(Config.port, function(){
    console.log(`listening on port ${Config.port}!`);
});
