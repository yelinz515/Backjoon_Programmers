class Solution {
    public int solution(String my_string, String target) {
        int cnt = 0;
        
        if(my_string.contains(target)) cnt++;
        
        return cnt;
    }
}