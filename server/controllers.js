'use strict'
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var AppRoot = React.createFactory(require('../src/index.js').AppRoot);

exports.index = function(req, res){
    var reactHtml = ReactDOMServer.renderToString(AppRoot({}));
    res.render('index', {reactRoot: reactHtml});
}
