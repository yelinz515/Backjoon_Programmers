let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()

let n = Number(input)
let result = []
let count = 0

function hanoi(num, from, other, to){
    if(num === 0) return;
    hanoi(num-1, from, to, other)
    result.push([from,to])
    count++
    hanoi(num-1, other, from, to)   
}
hanoi(n, '1', '2', '3')
console.log(count)
console.log(result.map(e=> e.join(' ')).join('\n'))