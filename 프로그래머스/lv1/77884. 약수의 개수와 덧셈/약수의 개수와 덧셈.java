class Solution {
    public int solution(int left, int right) {
        int answer = 0;
        
        int count = 0; 
        for(int i = left; i<= right; i++) {
            // i가 약수이면 count += i
            // 예를 들어 i가 9일 때 제곱수로 나누면 나머지가 0 --> 1 3 9 (홀수)
            if(i % Math.sqrt(i) == 0) answer-= i;
            else answer += i;
        }
        
        return answer;
    }
}