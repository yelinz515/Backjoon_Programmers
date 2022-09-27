function solution(progresses, speeds) {
    // 박스 포장 문제와 같음
    // 100 - progresses[i] = 7, 70, 45
    // (7, 70, 45) / speeds[i] = 7, Math.ceil(2) = 3, 9
    // newArr.push([7,3,9])
    
    // 첫번 째 수보다 크면 그게 max,
    // result.push(newArr.splice(0, max)) => [2,1]
    
    let rest = progresses.map(i => 100 - i)
    let newArr = rest.map((i,idx) => Math.ceil(i / speeds[idx]))
    console.log(newArr)
    let max = 0;
    let result = []
    while(newArr.length !== 0){
        // 첫번째 요소보다 큰 수면 만족하는 첫 번째 요소 인덱스 반환, 아니면 -1
        let n = newArr.findIndex(e => newArr[0] < e)
        console.log(n)
        if(n === -1){
            if(newArr.length > max){
                max = newArr.length                
            }
            result.push(newArr.length)
            newArr = []
            
        } else {
            if(n > max){
                max = n
            }
            result.push(newArr.splice(0, n).length)
        }
    }
    return result
}