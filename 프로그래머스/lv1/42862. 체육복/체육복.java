import java.util.*;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {    
        int result = n - lost.length;
        int count = 0;
        
        Arrays.sort(lost);
        Arrays.sort(reserve);

        //여벌 옷을 가지고 있는 학생이 도난 당하면 빌려줄 수 없도록 만든다.
        for(int i = 0; i<reserve.length; i++) {
            for(int j = 0; j<lost.length; j++) {
                if(reserve[i] == lost[j]) {
                    reserve[i] = lost[j] = -1;
                    count++;
                    break;
                }
            }
        }
     
        //옷을 빌려주고 -1로 만들어 뒤의 학생에게 빌려주지 않게 한다. 
        for(int i : lost) {
            for(int j = 0; j<reserve.length; j++) {
                int left = reserve[j] - 1;
                int right = reserve[j] + 1;
                if(i == left || i == right) {
                    reserve[j] = -1;
                    count++;
                    break;
                }
            }

        }
        //결과값 : 전체 학생수 - 잃어버린 학생 수 + 빌린 학생 수
        return result + count;
    }
}