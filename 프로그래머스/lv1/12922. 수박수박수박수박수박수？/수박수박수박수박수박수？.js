function solution(n) {
    let sum = ''
    for(let i = 0; i<n; i++){
        i % 2 === 0 ? sum += "수" : sum += "박"
    }
    return sum 
}