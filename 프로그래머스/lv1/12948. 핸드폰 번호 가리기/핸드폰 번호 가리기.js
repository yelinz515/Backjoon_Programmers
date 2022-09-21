function solution(phone_number) {
    // 전방 탐색 기호는 ?= 이며, = 다음에 오는 문자가 일치하는 영역에서 제외
    // 또한, 전방 탐색은 하위 표현식과 같이 소괄호로 감싸주어야만 합니다
    // return phone_number.replace(/\d(?=\d{4})/g, "*")
    // return "*".repeat(phone_number.length-4) + phone_number.slice(-4)
    
    return phone_number.slice(-4).padStart(phone_number.length, "*")
}