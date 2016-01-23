var fs = require('fs');

exports.loadIndexFromTemplate = function(req, res){
    var data = fs.readFile('./dist/index.html')
}
