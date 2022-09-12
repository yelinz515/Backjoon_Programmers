function solution(n) {
    let num = Math.sqrt(n)
    if(num > 0 && num % parseInt(num) === 0) return (num+1)**2
    return -1
}