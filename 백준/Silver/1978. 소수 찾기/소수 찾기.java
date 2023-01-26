import java.util.*;
import java.io.*;

public class Main {
    
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int count = 0;
        
        for(int i = 0; i<num; i++){
            int result = Integer.parseInt(st.nextToken());
            
            for(int p= 2; p <= result; p++){
                if(p == result) {
                    count++;
                }
                if(result % p == 0) break;
            }
        }
        System.out.print(count);
    }
}