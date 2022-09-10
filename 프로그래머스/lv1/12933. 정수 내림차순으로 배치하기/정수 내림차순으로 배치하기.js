function solution(n) {
    let str = n + ''
    let arr = str.split('')
    let sorted = arr.sort((a,b) => b - a)
    let result = +sorted.join('')
    return result
}