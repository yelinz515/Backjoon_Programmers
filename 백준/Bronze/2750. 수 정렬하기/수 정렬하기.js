let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = input.shift()
let numArr = input.map(Number)

function quickSort(numArr){
// arr의 요소가 하나이면 arr 자체를 그대로 반환
if(numArr.length < 2){
    return numArr
}

// quickSort 초기 배열을 선언 첫 pivot 배열의 첫 번째 요소이다.
let pivot = [numArr[0]]
let left = []
let right = []

// for문을 돌면서 pivot보다 작은 것은 왼쪽 
// 큰 것은 오른쪽 
// 그렇지 않은 것은 pivot에 넣어준다.
for(let i = 1; i<numArr.length; i++){
    if(numArr[i]<pivot){
        left.push(numArr[i])
    } else if (numArr[i]>pivot){
        right.push(numArr[i])
    }
    else {
        pivot.push(numArr[i])
    }
}
return quickSort(left).concat(pivot, quickSort(right));
}
console.log(quickSort(numArr).join('\n'))