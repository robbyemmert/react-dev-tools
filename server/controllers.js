var fio = require('./fileio.js');
var Template = require('./modules/template.js');

exports.index = function(req, res) {
    fio.loadTemplate('index.html');
    res.send('check log');
}
