let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let arr = []
for(let i of input){
    arr.push(i)
}
arr.pop()

console.log(Math.max(...arr))
console.log(arr.indexOf(String(Math.max(...arr)))+ 1)