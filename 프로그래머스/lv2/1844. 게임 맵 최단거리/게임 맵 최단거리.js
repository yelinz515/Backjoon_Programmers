function solution(maps) {
    // 상대 팀에 도착 x => -1
    // bfs => 최단 경로
    
    // 초기 행과 열의 개수를 저장
    const N = maps.length; // 5
    const M = maps[0].length; // 5
    // 상하좌우로 움직일 x와 y의 값 저장(좌 상 우 하)
    const direction = [[0, -1], [0, 1], [-1, 0], [1, 0]]
    
    // [1, 0, 1, 1, 1] => [0, 1, 0, 1, 1, 1, 0] 
    // 맵의 범위를 벗어나게 되면 0으로 간주할 수 있게 가장 자리를 감싸줍니다.
    let map = maps;
    wrapEdges(map)
//     	[
//   [
//     0, 0, 0, 0,
//     0, 0, 0
//   ],
//   [
//     0, 1, 0, 1,
//     1, 1, 0
//   ],
//   [
//     0, 1, 0, 1,
//     0, 1, 0
//   ],
//   [
//     0, 1, 0, 1,
//     1, 1, 0
//   ],
//   [
//     0, 1, 1, 1,
//     0, 1, 0
//   ],
//   [
//     0, 0, 0, 0,
//     0, 1, 0
//   ],
//   [
//     0, 0, 0, 0,
//     0, 0, 0
//   ]
// ]
    let queue = [[1,1,1]] // ?
    map[1][1] = 0 // map에 시작 지점을 0으로 만들어 줍니다.
    
    while (queue.length > 0) {
        const [x,y,count] = queue.shift()
        if (x == N && y == M) { // queue에서 첫 번째 값을 꺼내어 목표 지점(N,M)에 도착하였다면
            return count // 움직인 횟수를 반환
        }
        
        // queue에서 첫 번째 값을 꺼내어 목표 지점(N,M)에 도착하지 못했다면
        // 각 방향마다 캐릭터의 위치를 바꿔 진행
        // const direction = [[0, -1], [0, 1], [-1, 0], [1, 0]], 현재 [1,1,1]
        for (d of direction) {
            const next = [x + d[0],y + d[1],count+1] // [1, 0] + [1,1,1] =[2,1,2]
            // ?
            if (map[next[0]][next[1]] === 1) {
                map[next[0]][next[1]] = 0 // 무한 루프를 막기 위해 이미 방문하였다면 해당 위치를 0으로 바꿔줍니다.
                queue.push(next)
            }
        }
    }
    return -1
}
// 열의 0번째와 맨 끝번째, 행의 0번째와 맨 끝번째에 0을 넣어줍니다.
function wrapEdges(maps) {
    for(m of maps){
        m.splice(0,0,0); // 0번째, 0개 삭제,0으로 채우기
        m.push(0) // 맨 끝에 0 넣기
    }
    // 0번째, 0개 삭제, 7길이의 배열에 0으로 채우기(맨 앞 0배열 넣기)
    maps.splice(0, 0, new Array(maps.length + 2).fill(0));
    // 위에서 배열에 [0, 0, 0, 0, 0, 0, 0] 추가했기 때문에 현재 배열의 길이는 6, 
    // 즉 7길이의 배열에 0넣기(맨 끝 0배열 넣기)
    maps.push(new Array(maps.length + 1).fill(0)); 
}
