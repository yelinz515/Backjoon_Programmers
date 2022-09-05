let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()

const [N, ...list] = input.split(/\s/).map(Number)
const permutation = []
let max = 0
const visited = new Array(N+1).fill(false)

const recursion = () => {
    if(permutation.length === N){
        let sum = 0
        for(let i =0; i<N-1; i++){
            sum += Math.abs(permutation[i] - permutation[i+1])
        }
        if(max < sum){
            max = sum;
        }
    }
    
    for(let i = 0; i<N; i++){
        if(visited[i]) continue;
        permutation.push(list[i])
        visited[i] = true
        recursion()
        permutation.pop()
        visited[i] = false
    }
}
recursion()
console.log(max)