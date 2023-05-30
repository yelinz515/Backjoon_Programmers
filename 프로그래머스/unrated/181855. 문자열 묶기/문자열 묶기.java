class Solution {
    public int solution(String[] strArr) {
        int max = 0;
        
        // strArr 길이에 맞게 새로운 배열에 넣기
        // 새로운 배열에서 max 찾기
        
        int[] newArr = new int[31];
        
        for(int i = 0; i<strArr.length; i++) {
            newArr[strArr[i].length()]++;
        }
        for(int i = 0; i < 31; i++) {
            max = Math.max(max, newArr[i]);
        }
        
        return max;
    }
}