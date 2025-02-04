///  Q : function that can accept either Square or Rectangle and return an area (abstraction)

abstract class Shape {
    abstract area(): number;
}

class Square extends Shape {
    side: number;

    constructor(side: number) {
        super()
        this.side = side
    }

    area() {
        return this.side * this.side
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        super()
        this.width = width
        this.height = height
    }
    area() {
        return this.width * this.height
    }
}

const rectangle  = new Rectangle(5,4)
console.log(rectangle.area())

const square = new Square(5)
console.log(square.area())