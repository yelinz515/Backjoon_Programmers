let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let list = input.slice(1)

let filter = list.sort((a,b) => a.length-b.length || a.localeCompare(b))
let dup_re = [...new Set(filter)]
console.log(dup_re.join('\n'))
