// function solution(s) {
//     const regex = /^\d{4}$|^\d{6}$/g
//     return regex.test(s)
// }
function solution(s) {
  return s.length === 4 || s.length === 6 ? ![...s].map(Number).includes(NaN) : false;
}