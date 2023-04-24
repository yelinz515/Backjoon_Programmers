class Solution {
    public String solution(String s, String skip, int index) {
        String answer = "";
        
        
        // s의 길이만큼 반복문을 돌리면서 c라는 char부터 체크한다.
        for(int i = 0; i<s.length(); i++){
            char c = s.charAt(i);
            // count 는 알파벳 각각이 index만큼 건너뛰었는지 체크하는 변수
            int count = 1;
            // while문에서 ++c하여 다음 알파벳을 불러와 a-z를 만든다
            while(count <= index) {
                ++c;
                // 'z'를 넘어가면 아스키코드로 볼때 'a'~'z' (97~122)로 표현, 26만큼을 빼주면 해결가능
                if(c > 'z') c-=26;
 
                // skip에 포함되면 count를 증가시키지 않고 포함되지않는다면 증가시켜주면된다.
                if(skip.contains(c+"")) continue;
                else
                    count++;
                
            }
            answer += c;
        }      
        return answer;
    }
}