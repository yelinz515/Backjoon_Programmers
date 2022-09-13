let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let list = input[1].split(' ')
let sum = 0
for (let i of list){
    sum += Number(i)
}
let max = Math.max(...list)
let avg = sum/input[0]
console.log(avg/max*100)