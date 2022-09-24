function solution(board, moves) {
    let result = []
    let answer = 0
    
    for(let i =0; i<moves.length; i++){
        let col = moves[i]-1
        
        for(let j = 0; j<board.length; j++){
            if(board[j][col] !== 0){
                // 인형이 같은 경우 - result와 지금 꺼내려던 게 같으면
                if(result[result.length -1] === board[j][col]){
                    result.pop()
                    answer += 2
                }
                // 인형이 같지 않은 경우
                else {
                    result.push(board[j][col])                   
                }
                board[j][col] = 0
                break;
            }
        }
    }
    return answer
}