function solution(d, budget) {
    let sorted = d.sort((a,b) => a - b)
    let sum = 0
    let count = 0
    
    for(let i =0; i< d.length; i++){
        count++
        sum += d[i]
        if(sum > budget){
            count--
        }
    }
    return count
}