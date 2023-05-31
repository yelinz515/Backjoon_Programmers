import java.util.*;

class Solution {
    public int[] solution(int n) {
		List<Integer> answer = new ArrayList<>();
		
		for(int i = 2; i<=n; i++) {
			while(n >= i) {
				if(n % i == 0) {
					n /= i;
					answer.add(i);
				} else {
					i++;
				}

			}
			
		}
        return answer.stream().mapToInt(Integer :: intValue).distinct().toArray();
    }
}