let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let N = input[0].split(' ').map(Number)[0]
let person = input[0].split(' ').map(Number)[1]
let newArr = input[1].split(' ').map(Number)

newArr.sort((a,b) => b - a)
console.log(newArr[person - 1])