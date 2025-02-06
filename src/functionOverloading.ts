// function sum(num1:number , num2:number) : number
// function sum(num1:  string , num2 : string) :string

 // function sum(num1:any, num2 : any):any{
 //     return num1+num2
 // }

 // or can be done by
// function sum<T extends number | string>(param1: T, param2: T): T {
//     return (param1 as any) + (param2 as any);
//   }
// console.log(sum(10,20))
// console.log(sum('20','10'))



///Multiple Type Parameters
// function pair<T, U>(first: T, second: U): [T, U] {
//     return [first, second];
//   }
//   const mixedPair = pair<string, number>("Apple", 5);
//   console.log(mixedPair); // Output: ['Apple', 5]
  



// Type Constraints (extends)
// function getLength<T extends { length: number }>(item: T): number {
//     return item.length;
//   }
  
//   console.log(getLength("Hello")); // Output: 5
//   // console.log(getLength(123)); // Error: number does not have length



// Default Type Parameters
// function defaultGeneric<T = string>(value: T): T {
//     return value;
//   }
  
//   console.log(defaultGeneric()); // Output: ''
  
