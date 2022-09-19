function solution(n) {
    let sum = ''
    for(let i = 0; i<n; i++){
        if(i % 2 === 0) sum += "수"
        else if(i % 2 !== 0) sum += "박"
    }
    return sum 
}