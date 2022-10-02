function solution(maps) {
    let N = maps.length
    let M = maps[0].length
    
    let direction = [[0,-1], [0,1], [-1,0], [1,0]]
    
    let map = maps;
    wrapEdges(map)
    
    let queue = [[1,1,1]]
    map[1][1] = 0

    
    while(queue.length > 0){
        let [x, y, count] = queue.shift()
        if(x == N && y == M){
            return count
        }
        
        for(let d of direction){
            let next = [x+d[0], y+d[1], count + 1]
            if (map[next[0]][next[1]] === 1) {
                map[next[0]][next[1]] = 0
                queue.push(next)
            }
        }
    }
    return -1
}
function wrapEdges(maps) {
    // 행
    for(let m of maps){
        m.splice(0,0,0)
        m.push(0)
    }
    // 열
    maps.splice(0,0,new Array(maps.length + 2).fill(0))
    maps.push(new Array(maps.length + 1).fill(0))
}