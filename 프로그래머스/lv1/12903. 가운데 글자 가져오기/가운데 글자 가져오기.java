class Solution {
    public String solution(String s) {
        String str = null;
        String[] sArr = s.split("");
        return s.length() % 2 == 0 ? sArr[(s.length() / 2) - 1]+ sArr[s.length() / 2] : sArr[(s.length() -1) / 2] ;
    }
}