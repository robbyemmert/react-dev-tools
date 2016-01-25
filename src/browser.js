import React from 'react';
import ReactDOM from 'react-dom';
import { AppRoot } from './index.js';

ReactDOM.render(
    <AppRoot />,
    document.getElementById('reactRoot')
);

var person = 'Christine';
console.log(`Hello ${person}`);

export class SomeClass {
    constructor() {
        console.log('constructed!');
    }

    heyo(){
        console.log('Party on dudes!');
    }
}

var inst = new SomeClass();
inst.heyo();
