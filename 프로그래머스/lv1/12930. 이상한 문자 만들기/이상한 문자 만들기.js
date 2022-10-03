function solution(s) {
    // 짝수번째 알파벳은 대문자
    // 홀수번째 알파벳은 소문자
    let result = s.split(' ').map(word => word.split('').map((s,idx) => idx % 2 === 0 ? s.toUpperCase() : s.toLowerCase()).join('')).join(' ')
    return result
}
