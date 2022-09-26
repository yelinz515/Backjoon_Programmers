function solution(left, right) {
    let sum = 0
    for(let i = left; i<=right; i++){ // 13 - 17
        // 제곱근이 정수이면 약수의 개수가 홀수
        Number.isInteger(Math.sqrt(i)) ? sum -= i : sum += i                     
    }
    return sum
}