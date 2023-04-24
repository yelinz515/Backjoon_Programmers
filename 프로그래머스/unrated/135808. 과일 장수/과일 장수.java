import java.util.*;

class Solution {
    public int solution(int k, int m, int[] score) {
        int answer = 0;
        
        // 내림차순
        Arrays.sort(score);
            
        // 남은개수가 k랑 같으면 result에 더하기
        for(int i = score.length; i>=m; i-=m) {
            answer += score[i-m] * m;
            
        }
        
        return answer;
    }
}