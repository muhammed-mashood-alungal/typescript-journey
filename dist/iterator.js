"use strict";
class Myiterator {
    constructor(end) {
        this.current = 0;
        this.end = end;
    }
    next() {
        if (this.current < this.end) {
            return { value: this.current++, done: false };
        }
        else {
            return { value: this.current, done: true };
        }
    }
}
const myiterator = new Myiterator(5);
let result = myiterator.next();
while (!result.done) {
    console.log(result.value);
    result = myiterator.next();
}
