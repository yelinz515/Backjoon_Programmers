function solution(numbers) {
    let answer = []
    for(let i =0; i<numbers.length; i++){ // 0,1,2,3,4
        for(let j = i+1; j<numbers.length; j++){ // 1,2,3,4
            answer.push(numbers[i] + numbers[j])
        }
    }
    let result = [...new Set(answer)]
    return result.sort((a,b) => a-b)
}