function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for(let i =0; i<numbers.length; i++){
        let result = s.split(numbers[i])
        s = result.join(i) // 인덱스를 넣기 때문에 숫자가 들어갈 것이다.
    }
    return +s
}