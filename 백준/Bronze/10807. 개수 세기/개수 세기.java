import java.util.*;
import java.io.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());
        int[] arr = new int[num];
        
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        for(int i = 0; i < arr.length; i++){
            arr[i] = Integer.parseInt(st.nextToken());
        }
        
        int selectNum = Integer.parseInt(br.readLine());
        int count = 0;
        
        for(int i = 0; i < arr.length; i++){
            if(selectNum == arr[i]){
                count++;
            }
        }
        System.out.print(count);
        
    }

}