function solution(n) {
    let str = n + ''
    let arr = str.split('')
    let sorted = arr.reverse().map(Number)
    // let num = sorted
    return sorted
}