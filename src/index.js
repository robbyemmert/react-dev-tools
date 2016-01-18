console.log('Hello World');

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
