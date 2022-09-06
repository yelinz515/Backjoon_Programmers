let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

// https://www.youtube.com/watch?v=Enz2csssTCs
// 각 수마다 방문했는지 아닌지 체크하는 visited 배열을 만들고 초기값으로 false를 넣어준다
// 반복문을 돌면서 방문한 적이 "없다면" array에 넣어주고, 재귀적으로 또 함수를 실행
// 실행하다가 count가 M과 같아진다면 출력하고 종료

const N = input[0]
const M = input[1]
const visited  = new Array(N+1).fill(false) // 기존 N보다 한 개더 추가한 배열 생성 => [ false, false, false, false, false ]
const array = [];
let result = ''

const dfs = (cnt) => {
    if(cnt === M){ 
        result += `${array.join(" ")}\n`
       
        return; 
    }
    
    for(let i = 0; i<N; i++){
        if(!visited[i] || visited[i]){ 
            array[cnt] = i+1;
            visited[i] = true
            dfs(cnt + 1)
            visited[i] = false
        }
    }
}
dfs(0)
console.log(result);