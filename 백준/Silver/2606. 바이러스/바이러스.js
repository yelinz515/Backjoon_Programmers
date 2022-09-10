let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let N = Number(input.shift());
let edge = Number(input.shift());
let visited = Array(N+1).fill(false);
let grph = [...Array(N + 1)].map(e => []);
for(let i = 0 ; i < edge; i++){
  let [from, to] = input[i].split(' ').map(Number);
  grph[from].push(to);
  grph[to].push(from);
}
let result = 0
const dfs = (v) => {

     if(visited[v]){
          return;
      }
    
      visited[v]=true;
      result++;
      grph[v].forEach((vertex)=>{
          if(!visited[vertex]){
              dfs(vertex);
          }
      });
}
dfs(1)
console.log(result-1)