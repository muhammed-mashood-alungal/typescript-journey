class Person {
    private _age : number = 0 ;
    name : string
    constructor(name : string ){
       this.name = name
    }

    get getAge():number{
        return this._age
    }

    set setAge(age:number){
        if(age <= 0){
             console.log("enter a valid age")
        }else{
            this._age = age
        }
    }
}
const p = new Person("mashu")
console.log(p.name)
console.log(p.getAge)
p.setAge = 18
console.log(p.getAge)