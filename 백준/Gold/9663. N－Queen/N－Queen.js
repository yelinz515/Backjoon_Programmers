let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const N = input[0]
let isused1 = new Array(N+1).fill(false)
let isused2 = new Array(N+1).fill(false)
let isused3 = new Array(N+1).fill(false)
let cnt = 0

const queen = (cur) => {
    if(cur === N){
        cnt++
        return;
    }
    for(let i= 1; i<=N; i++){
        if(isused1[i] || isused2[i+cur] || isused3[i-cur+N-1]) continue;
        isused1[i] = true
        isused2[i+cur] = true
        isused3[i-cur+N-1] = true
        queen(cur+1)
        isused1[i] = false
        isused2[i+cur] = false
        isused3[i-cur+N-1] = false
    }
}
queen(0)
console.log(cnt)