class Myiterator implements Iterator<number> {
    private current : number = 0;
    private end :number;
    constructor(end:number){
        this.end = end
    }

    next() : IteratorResult<number>{
        if(this.current < this.end){
            return {value : this.current++ , done: false}
        }else{
            return {value : this.current , done : true}
        }
    }
}

const myiterator = new Myiterator(5)

let result = myiterator.next()
while(!result.done){
    console.log(result.value)
    result  = myiterator.next()
}
