function solution(numbers) {
    let num = [1,2,3,4,5,6,7,8,9,0]
    let sum = 0
    
    for(let j = 0; j<num.length; j++){
        if(!numbers.includes(num[j])){
            sum += num[j]
        }
    }
    return sum
}