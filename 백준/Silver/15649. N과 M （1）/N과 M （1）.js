let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const N = input[0]
const M = input[1]
const visited = new Array(N+1).fill(false)
const array = []

const dfs = (cnt) => {
    //base
    if(cnt === M){
        console.log(array.join(" "))
        return;
    }
    
    for(let i =1; i<=N; i++){
        if(!visited[i]){
            array[cnt] = i
            visited[i] = true
            dfs(cnt+1)
            visited[i] = false
        }
    }
}
dfs(0)