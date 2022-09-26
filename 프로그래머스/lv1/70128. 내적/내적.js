function solution(a, b) {
    // 내적은 두 수열의 해당 항목의 곱 의 합
    let result = a.map((j,idx) => j*b[idx])
    let sum = 0
    return result.reduce((arr,cur) => arr + cur)
}