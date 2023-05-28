import java.util.*;

class Solution {
    public int[] solution(int[] num_list, int n) {
        int[] answer = {};
        int[] answer2 = {};
        
        answer = Arrays.copyOfRange(num_list, n, num_list.length);
        answer2 = Arrays.copyOfRange(num_list, 0, n);
        
        int[] newArray = new int[answer.length + answer2.length];
        
        int index = 0;

        for(int num: answer) {
            newArray[index++] = num;
        }

        for(int num: answer2) {
            newArray[index++] = num;
        }
        
        return newArray;
    }
}