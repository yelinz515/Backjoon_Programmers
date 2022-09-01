let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()

let year = Number(input)

// 4의 배수 || 100의 배수 아닐 때 = 윤년
// 4의 배수 || 400의 배수 일 때 = 윤년
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log(1)
}
else{
    console.log(0)
}