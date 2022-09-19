function solution(x, n) {
    return Array(n).fill(x).map((a,b) => a*(b+1))
}