let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let rec = []
for(let i = 2; i<input.length; i++){
    rec.push(input[i].split(' '))
}
rec.pop()

let price = 0
for(let j=0; j<rec.length; j++){
    price += rec[j][0] * rec[j][1]
}

if(Number(input[0]) === price){
    console.log("Yes")
}
else {
    console.log("No")
}