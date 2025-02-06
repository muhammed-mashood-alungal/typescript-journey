"use strict";
class Person {
    constructor(name) {
        this._age = 0;
        this.name = name;
    }
    get getAge() {
        return this._age;
    }
    set setAge(age) {
        if (age <= 0) {
            console.log("enter a valid age");
        }
        else {
            this._age = age;
        }
    }
}
const p = new Person("mashu");
console.log(p.name);
console.log(p.getAge);
p.setAge = 18;
console.log(p.getAge);
