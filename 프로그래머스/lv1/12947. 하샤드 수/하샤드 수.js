function solution(x) {
    let arr = String(x).split('').map(Number)
    let sum = arr.reduce((acc,cur) => acc+cur)
    return x % sum === 0 ? true : false
}