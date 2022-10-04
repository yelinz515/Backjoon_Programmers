function solution(numbers, target) {
    let count = 0
    dfs(0,0)
  
    function dfs(level, sum){
        if(level === numbers.length){
          if(sum === target){
            count += 1
          }
            return;
        }
        dfs(level + 1, sum + numbers[level])
        dfs(level + 1, sum - numbers[level])
    }
    return count
}