#include <stdio.h>

int main(void) {
  int zer = 0;
  int fir = 1;
  int n;
  scanf("%d",&n);
  
  int next;

  for(int i = 0; i<n; i++){
    next =zer + fir;
    zer = fir;
    fir = next;
  }
  printf("%d",zer);
}