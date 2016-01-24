var fs = require('fs');
var through = require('through');

var filter = through(function(buffer){
    console.log('filtering ', buffer.toString());

    this.queue(buffer.toString());
});

exports.loadTemplate = function(template){
    fs.createReadStream(__dirname + '/templates/' + template)
    .pipe(filter)
    .on('end', function(data){
        console.log('done', data);
    });
}

exports.parseDataAsString = function(err, data){
    if (err) {
        return console.error('Error reading file');
    } else {
        return data.toString();
    }
}
