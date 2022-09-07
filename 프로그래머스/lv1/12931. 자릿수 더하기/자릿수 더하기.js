function solution(n){
    let arr = String(n).split('').map(Number)
    let result = arr.reduce((acc, cur) => acc + cur)
    return result
    }