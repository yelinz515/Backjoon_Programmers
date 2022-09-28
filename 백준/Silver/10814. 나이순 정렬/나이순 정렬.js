let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let count = input.shift()
let sorted = input.sort((a,b) => parseFloat(a) - parseFloat(b))
console.log(sorted.join('\n'))
