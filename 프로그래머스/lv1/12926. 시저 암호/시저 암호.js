function solution(s, n) {
    // split
    // charCodeAt, fromCharCode
    return [...s].map((i) => {
        if(i === " ") return i
        return i.toUpperCase().charCodeAt() + n > 90 ? 
            String.fromCharCode(i.charCodeAt() + n -26) : String.fromCharCode(i.charCodeAt() + n)
    }).join('')
}