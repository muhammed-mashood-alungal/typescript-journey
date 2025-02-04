"use strict";
///  Q : function that can accept either Square or Rectangle and return an area (abstraction)
class Shape {
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(5, 4);
console.log(rectangle.area());
const square = new Square(5);
console.log(square.area());
