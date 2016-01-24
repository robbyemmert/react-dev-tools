import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/testComponent.js';

ReactDOM.render(
    <TestComponent />,
    document.getElementById('reactRoot')
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
