let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let sumList = input[1].split('').map(Number)
let sum = 0
for(let i=0; i<sumList.length; i++){
    sum += sumList[i]
}
console.log(sum)