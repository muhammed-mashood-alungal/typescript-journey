// sample=====
// interface Person {
//     name: string;
//     age: number;
//   }


/// methods in interface
// interface Greeter {
//     greet(name: string): string;
//   }


//readonly properties
// interface Point {
//     readonly x: number;
//     readonly y: number;
//   }

// Index Signatures
// interface Dictionary {
//     [key: string] : number
//   }

///  Extending Interfaces
// interface Animal {
//     name: string;
//   }
  
//   interface Dog extends Animal {
//     breed: string;
//   }
  
//   const myDog: Dog = {
//     name: "Buddy",
//     breed: "Golden Retriever"
//   };
  
//Hybrid Types
//=========An interface can describe objects that act as both a function and an object, known as hybrid types.
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
//   }
  
//   const counter: Counter = (start: number) => {
//     return `Counter started at ${start}`;
//   };
//   counter.interval = 1000;
//   counter.reset = () => {
//     console.log('Counter reset');
//   };
  
//   counter(10)


// Function Types

// interface Sum {
//     (a: number, b: number): number;
//   }

//   const add: Sum = (a, b) => a + b;
  

// Merging Interfaces (Declaration Merging)


// interface Employee {
//     name: string;
//   }
  
//   interface Employee {
//     age: number;
//   }
  
//   const e: Employee = {
//     name: 'John',
//     age: 30
//   };


// Extending Classes
// interface Shape {
//     color: string;
//   }
  
//   class Rectangle implements Shape {
//     color: string;
//     constructor(color: string) {
//       this.color = color;
//     }
//   }
  

/// Using Interface with Generics

// interface Box<T> {
//     value: T;
//   }
  
//   const numberBox: Box<number> = { value: 10 };
//   const stringBox: Box<string> = { value: 'Hello' };
  
  