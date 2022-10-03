function solution(n) {
    let ternary = n.toString(3)
    let reverse =ternary.split('').map(Number).reverse()
    return Number.parseInt(reverse.join(''), 3)
    
}