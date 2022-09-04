function solution(n) {
    var answer = 0;
    
    for(let i = 1; i<=Math.sqrt(n); i++){
        if(n % i === 0){
            answer += i // n =12, i = 1,3,6
            if(n / i != i) answer += n / i // 12,4,2
        }
    }
    
    return answer;
}