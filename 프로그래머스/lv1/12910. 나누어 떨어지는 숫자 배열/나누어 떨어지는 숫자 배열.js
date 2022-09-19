function solution(arr, divisor) {
    let result = arr.filter(i => {
        if(i % divisor === 0) return i
    })
    // return result
    return result.length === 0 ? [-1] : result.sort((a,b) => a-b)
}