let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let arr = input.slice(1)

let result = arr.sort((a,b) => parseFloat(a) - parseFloat(b))
console.log(result.join('\n'))