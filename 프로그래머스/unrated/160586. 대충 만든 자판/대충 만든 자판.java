import java.util.*;

class Solution {
    public int[] solution(String[] keymap, String[] targets) {
        int[] answer = new int[targets.length];
        HashMap<Character, Integer> result = new HashMap<Character, Integer>();

        // result에 담기
        for(String i : keymap) {
            // System.out.println(i);
            for(int j = 0; j<i.length(); j++) {
                // System.out.println(j);
                char c = i.charAt(j);
                // System.out.println(c);
                if(!result.containsKey(c) || j<result.get(c)) {
                    result.put(c, j+1);
                }
            }
        }
        
        // keymap.includes() != target이면 -1
        // 판별해서 answer 도출
        for(int i=0 ; i<targets.length ; i++) {
            int cnt = 0;
            for(int j=0 ; j<targets[i].length() ; j++) {
                char c = targets[i].charAt(j);
                if(!result.containsKey(c)) {
                    cnt = 0;
                    break;
                } else {
                    cnt += result.get(c);
                }
            }
            answer[i] = cnt==0?-1:cnt;
        }
        return answer;
    }
} 