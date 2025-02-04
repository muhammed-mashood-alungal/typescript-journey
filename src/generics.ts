/// Q :generic function that takes two different datatypes as args and returns both in array

// function sampleFunction<T,S>(stringArg:T,numberArg:S): [T,S]{
//      return [stringArg,numberArg]
// }
// console.log(sampleFunction("hello" , 10))

// ========================================================================================

// Q : variadic function to filter string args and return them

// function filterStrings(...args:any[]) : string[]{
//      return args.filter(arg => typeof arg == "string")
// }
// console.log(filterStrings(1, "hello", true, "world", 42, "typescript"));