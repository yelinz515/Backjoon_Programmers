import java.util.*;
import java.io.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());
        
        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] arr = new int[num];
        
        for(int i=0; i<arr.length; i++){
            arr[i] = Integer.parseInt(st.nextToken());
        }
        
        int searchNum = Integer.parseInt(br.readLine());
        int count = 0;
        
        for(int i=0; i<arr.length; i++){
            if(arr[i] == searchNum){
                count++;
            }
        }
        System.out.println(count);
    }
}