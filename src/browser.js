import React from 'react';
import ReactDOM from 'react-dom';
import { AppRoot } from './index.js';

ReactDOM.render(
    <AppRoot />,
    document.getElementById('reactRoot')
);

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
