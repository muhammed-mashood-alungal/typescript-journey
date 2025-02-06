function* printNumbers(upto:number) : IterableIterator<number>{
    let count = 1
    while(count < upto){
        yield count
    }
}

let counter = printNumbers(10)

let res = counter.next()
while(!res.done){
   console.log(res.value)
   res = counter.next()
}
