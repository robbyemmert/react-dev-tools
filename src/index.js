import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello World</h1>,
    document.getElementById('test-element')
);

var person = 'Christine';
console.log(`Hello ${person}`);

export class SomeClass {
    constructor() {
        console.log('constructed!');
    }

    heyo(){
        console.log('hey there');
    }
}

var inst = new SomeClass();
inst.heyo();
