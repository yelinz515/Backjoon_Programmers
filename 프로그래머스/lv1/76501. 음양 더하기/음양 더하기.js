function solution(absolutes, signs) {
    let answer = 0
    for(let j = 0; j<absolutes.length; j++){
        signs[j] ? answer += absolutes[j] : answer -= absolutes[j]
    }
    return answer
}