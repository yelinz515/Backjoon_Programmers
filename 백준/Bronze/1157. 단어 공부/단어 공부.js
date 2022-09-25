let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()

let up = input.toUpperCase()
let obj = {}

for(let i = 0; i<up.length; i++){
    if(obj[up[i]] === undefined){
        obj[up[i]] = 1
    }
    else {
        obj[up[i]] += 1        
    }
}

let count = 0
let result = ''

for(let i in obj){
    if(obj[i] > count){
        count = obj[i]
        result = i
    }
    else if(obj[i] === count){
        result = '?'
    }
}
console.log(result)