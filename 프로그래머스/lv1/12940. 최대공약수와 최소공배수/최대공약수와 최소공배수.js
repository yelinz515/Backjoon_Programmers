function solution(a, b) {
  return [gcd(a, b), lcm(a, b)];
}

function lcm(a, b) {
  return (a * b) / gcd(a, b); // 두 수 곱하기 / gcd
}

function gcd(a, b) {
    // base
  if (b === 0) return a;
  return a > b ? gcd(b, a % b) : gcd(a, b % a);
}