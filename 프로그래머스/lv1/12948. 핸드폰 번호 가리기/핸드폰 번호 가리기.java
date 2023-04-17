class Solution {
    public String solution(String phone_number) {
        // String.toCharArray()는 문자열을 한 글자씩 쪼개서
        // 이를 char타입의 배열에 집어넣어주는 친절한 메소드
        char[] arr = phone_number.toCharArray();
        
        for(int i = 0; i < arr.length - 4; i++) {
            arr[i] = '*';
        }
        // valueOf() 함수는 입력받은 인자 값을 지정된
        // Number 객체 형으로 변환하여 반환
        return String.valueOf(arr);
    }
}