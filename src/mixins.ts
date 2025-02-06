// function LoggingMixin<T extends new (...args:any[])=>{}>(Base : T){
//     return class extends Base {
//        log(message : string){
//          console.log(message)
//        }
//     }
// }
// function CouterMixin<T extends new (...args : any[]) => {}>(Base : T){
//   return class extends Base {
//     count = 0
//     increament(){
//         this.count++
//     }
//   }
// }

// class BaseClass {}

// class MixedClass extends CouterMixin(LoggingMixin(BaseClass)) {}

// const obj =new MixedClass()
// obj.log("Hello world")
// obj.increament()
// console.log(obj.count)



///  Constrained Mixins
// function LoggerMixin<T extends {new (...args:any[]) : {name:string}}>(Base : T){
 
//     return class extends Base {
//         log(){
//             console.log(this.name)
//         }
//     }
// }  
// class BaseClass {
//     name:string
//     constructor(){
//         this.name = 'mashood'
//     }
// }
// class MixedClass extends LoggerMixin(BaseClass) {}

// const m = new MixedClass()
// m.log()
