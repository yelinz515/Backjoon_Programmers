let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let newArr = input[1].split(' ').map(Number)

let set = new Set(newArr)
let sorted = [...set].sort((a,b) => a - b)

let dic = {}
sorted.forEach((e, idx) => {dic[e] = idx})

let answer = ''
for(let i of newArr){
    answer += dic[i] + ' '
}
console.log(answer)