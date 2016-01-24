'use strict'

var fs = require('fs');
var through = require('through');
var Mustache = require('mustache');

var Config = require('../../server.config.js');

class Template {
    constructor(fileName, state){
        this.url = Config.templateDir + '/' + fileName;
        this.state = state;
        this.dirty = true;
    }

    setState(state) {
        this.state = state;
        this.dirty = true;

        return this;
    }

    render(){
        if (!this.templateString) {
            console.error('Template rendered before loading.');
            return '';
        }

        this.output = Mustache.render(this.templateString, this.state);
        this.dirty = false;

        return this.output;
    }

    toString(){
        if (this.dirty) {
            this.render();
        }

        return this.output;
    }

    get output(){
        return this.toString();
    }

    load(){
        return fs.createReadStream(this.url)
        .pipe(this.templateReader())
    }

    templateReader(){
        return through((buffer) => {
            this.templateString = buffer.toString();
            Mustache.parse(this.templateString);  //just for efficiency
            this.queue(buffer.toString());
        });
    }

    static templateRoute(templateName){
        let template = new Template(templateName);
        template.load();

        return function(req, res){
            res.send()
        }
    }
}

module.exports = Template;
