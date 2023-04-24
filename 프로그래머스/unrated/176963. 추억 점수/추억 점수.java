import java.util.*;

class Solution {
    public int[] solution(String[] name, int[] yearning, String[][] photo) {
        int[] answer = new int[photo.length];
        
        // name과 photo를 비교해 없는 인덱스를 기준으로 더하기
        for(int i = 0; i<photo.length; i++) {
            for(int j = 0; j<photo[i].length; j++) {
                // System.out.println(photo[i][j]);
                System.out.println();
                if(Arrays.asList(name).indexOf(photo[i][j]) != -1) {
                    answer[i] += yearning[Arrays.asList(name).indexOf(photo[i][j])];
                }
            }
        }
        
        
        
        return answer;
    }
}