function solution(s) {
    const regex = /^\d{4}$|^\d{6}$/g
    return regex.test(s)
}