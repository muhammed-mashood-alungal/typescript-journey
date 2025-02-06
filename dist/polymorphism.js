"use strict";
// polymorphism - method overloading example
class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }
}
const calc = new Calculator();
console.log(calc.add("10", 'hello'));
console.log(calc.add(10, 10));
