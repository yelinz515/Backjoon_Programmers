const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ')
let a = parseInt(inputData[0])
let b = parseInt(inputData[1])

console.log(a/b)