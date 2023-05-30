import java.util.*;

class Solution {
    public int solution(int[] num_list) {
		int sumPow = (int) Math.pow(Arrays.stream(num_list).sum(), 2);
		int pro = Arrays.stream(num_list).reduce((a, b) -> a * b).getAsInt();
		
		return pro < sumPow? 1: 0;
    }
}