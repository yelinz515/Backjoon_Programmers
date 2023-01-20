function solution(A, B) {
  let count = 0
  A.sort((a, b) => b - a)
  B.sort((a, b) => a - b)
  
  for(let i of A){
    let max = B[B.length - 1]
    if(i < max){
      count++
      B.pop()
    }
  }
  return count
}