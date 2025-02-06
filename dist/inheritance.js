"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Animal is making the sound");
    }
}
class Dog extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
}
const dog1 = new Dog("puppy", 'brown');
dog1.makeSound();
console.log(dog1.name, dog1.color);
