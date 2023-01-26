import java.util.*;
import java.io.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String a = br.readLine();
        int result = Integer.parseInt(a);
        
        for(int i = 1; i<=result; i++){
             for(int j = 1; j<=i; j++){
                 System.out.print("*");
             }
            System.out.println();
        }
    }
}