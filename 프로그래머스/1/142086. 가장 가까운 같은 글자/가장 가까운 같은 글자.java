import java.util.*;

class Solution {
    public int[] solution(String s) {
        int[] answer = new int[s.length()];
        HashMap<Character, Integer> temp = new HashMap<>();
        // 내 앞에 나와 같은 문자가 있으면, 최종 가장 가까운 거리
        // 아니면 -1
        for(int i = 0; i<s.length(); i++){
            char n = s.charAt(i);
            
            answer[i] = i - temp.getOrDefault(n, i+1);
            System.out.println(n + " " + i);
            temp.put(n, i); // 마지막 기록
        }
        return answer;
    }
}