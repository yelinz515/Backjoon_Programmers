function solution(a, b) {
    let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let result = new Date(2016, (a - 1), b).getDay()
    return day[result]
}