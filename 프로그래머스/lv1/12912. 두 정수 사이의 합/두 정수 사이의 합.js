function solution(a, b) {
    let sum = 0
    let sorted = [a,b].sort((i,j) => i - j)
    for(let i = sorted[0]; i<=sorted[1]; i++){
        sum += i
    }
    return sum
}