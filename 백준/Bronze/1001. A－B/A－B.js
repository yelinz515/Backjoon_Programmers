const fs = require('fs');
//배열에 입력값을 공백으로 나눠 담고, 
//.map(value=>+value) : 숫자의 경우 연산을 하기 위해 다시 숫자로 변형시켜줘야 한다.
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(value=>+value);

let [a,b] = inputData;

console.log(a-b);