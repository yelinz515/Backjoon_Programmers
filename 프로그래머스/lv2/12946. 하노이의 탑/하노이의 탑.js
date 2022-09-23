function solution(n) {
    let result = []
    function hanoi(n, from, mid, to) {
        if(n === 1) return result.push([from,to])
        
        hanoi(n-1, from, to, mid)
        result.push([from, to])
        hanoi(n-1, mid, from, to)
    }
    hanoi(n,1,2,3)
    return result
}