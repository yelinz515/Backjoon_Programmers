class Solution {
    public int solution(String t, String p) {
        int count = 0;
        int plen = p.length();
        long num = Long.parseLong(p);
        
        // p가 나타내는 수보다 작거나 같은 것이 나오는 횟수
        // p 문자열 길이 만큼 split
        for(int i = 0; i<t.length() - plen + 1; i++) {
            long partStr = Long.parseLong(t.substring(i, i+plen));
            if(partStr <= num) {
                count++;
            }
        }
        return count;
    }
}