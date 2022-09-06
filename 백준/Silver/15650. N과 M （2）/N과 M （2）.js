let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const N = input[0]
const M = input[1]
const visited  = new Array(N+1).fill(false) // 기존 N보다 한 개더 추가한 배열 생성 => [ false, false, false, false, false ]
const array = [];
let result = ''

const dfs = (idx, cnt) => {
    if(cnt === M){ 
        result += `${array.join(" ")}\n`
        return;
    }
    
    for(let i = idx; i< N; i++){
        if(!visited[i]){ 
            array[cnt] = i+1;
            visited[i] = true
            dfs(i, cnt + 1)
            visited[i] = false
        }
    }
}
dfs(0,0)
console.log(result);