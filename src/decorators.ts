/// 1: Class Decorator

// function Logger(target: Function){
//     console.log(`the class name is ${target.name}`)
// }

// @Logger
// class Sample {}

//  2: Property Decorator

// function propertyDecorator(target : any , context:ClassFieldDecoratorContext){
//     console.log(`property Name is ${String(context.name)} `)
//     ///Note in property decorator the target will be the undefined
//     console.log(target)  // this will give undefined
// }

// class Sample {
//     @propertyDecorator
//     hello:string = 'hello'
// }
// const p = new Sample()



// 3: Method Decorator

// function methodLog(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log(target);      
//     console.log(propertyKey);
//     console.log(descriptor); 
//   }
  
//   class Sample {
//     @methodLog
//     add(a: number, b: number) {
//       return a + b;
//     }
//   }
  
//   const sample = new Sample();
//   sample.add(2, 3);
  


//  4: Parameter Decorator
// function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
//     console.log(`Parameter decorator applied to index: ${parameterIndex} of method: ${propertyKey}`);
//   }
  
//   class Greeter {
//     greet(@LogParameter message: string) {
//       console.log(`Greeting: ${message}`);
//     }
//   }
  
//   new Greeter().greet("Hello, Bro!");
  

