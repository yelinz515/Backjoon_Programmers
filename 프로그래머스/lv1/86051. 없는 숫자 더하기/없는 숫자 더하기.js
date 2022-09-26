function solution(numbers) {
    let sum = 0
    
    for(let j = 0; j<10; j++){
        if(!numbers.includes(j)){
            sum += j
        }
    }
    return sum
}