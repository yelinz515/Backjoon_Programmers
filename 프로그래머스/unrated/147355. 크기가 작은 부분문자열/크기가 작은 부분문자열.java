class Solution {
    public int solution(String t, String p) {
        int answer = 0;
        int plen = p.length();
        long num = Long.parseLong(p);
        
        for(int i = 0; i<t.length() - plen + 1; i++) {
            long psplit = Long.parseLong(t.substring(i, plen + i));
            if(psplit <= num) {
                answer++;
            }
        }
        return answer;
    }
}