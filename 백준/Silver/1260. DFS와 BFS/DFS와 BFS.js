let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [N, edge, start_v] = input[0].split(' ').map(Number);
input = input.slice(1)

let grph = Array.from(Array(N + 1), () => Array(N + 1).fill(0)); // 인접행렬 만들기

//양방향 그래프로 입력 노드 위치에 1 대입(인접행렬)
for (let i = 0; i < edge; i++) {
  const xy = input.shift().split(' '); 
  const x = Number(xy.shift()); 
  const y = Number(xy.shift());
    grph[x][y] = 1;
    grph[y][x] = 1;
}

const bfs = (v) => {
    let result = ''
    let visited = Array(N+1).fill(false);
    visited[v] = true;
    
    let queue = []
    queue.push(v);
    
    while (queue.length > 0) {
    let cur = Number(queue.shift());
    result += cur + ' ';
    for (let next = 1; next <= N; next++) {
      if (!visited[next] && grph[cur][next]) {
        visited[next] = true;
        queue.push(next);
        }
      }
    }
    console.log(result);
}

const dfs = (v) => {
    let result = ''
    let visited = Array(N+1).fill(false);
    let stack = [] 
    stack.push(v);
    
    while (stack.length > 0) {
    let cur = stack.pop();
    
    if(!visited[cur]){
        visited[cur] = true;
        result += cur + ' ';
    }

    for (let next = N; next >= 1; next--) {
      if (!visited[next] && grph[cur][next]) {
        stack.push(next);
        }
      }
    }
    console.log(result);
}

dfs(start_v)
bfs(start_v)