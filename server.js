var express = require('express');
var mustache = require('mustache-express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var babelRegister = require('babel-register');

babelRegister();
var app = express();

var TestComponent = React.createFactory(require('./src/components/testComponent.js'));

var Config = require('./server.config.js');
var Controllers = require('./server/controllers.js');

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/server/templates');

app.get('/', function(req, res){
    var reactHtml = ReactDOMServer.renderToString(TestComponent({}));
    res.render('index', {reactRoot: reactHtml});
});

// This should be prioritized last
app.use(express.static('dist'));

app.listen(Config.port, function(){
    console.log(`listening on port ${Config.port}!`);
});
