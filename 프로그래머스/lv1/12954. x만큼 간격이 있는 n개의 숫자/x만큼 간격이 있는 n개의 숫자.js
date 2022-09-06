function solution(x, n) {
    return Array(n).fill(x).map((a,i) => (i+1) * a)
}