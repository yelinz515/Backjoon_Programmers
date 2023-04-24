import java.util.HashMap;

class Solution {
    public int[] solution(String s) {
        String[] strArr = s.split("");
        int[] answer = new int[strArr.length];
        HashMap<String, Integer> result = new HashMap<String, Integer>();
        
        for(int i = 0; i<strArr.length; i++) {

            if(result.get(strArr[i]) == null) {
                answer[i] = -1;
            } else {
                answer[i] = i - result.get(strArr[i]);
            }
            result.put(strArr[i], i);
        }
        return answer;
    }
}