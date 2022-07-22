#include <stdio.h>
int main(){
  int n;
  scanf("%d",&n);
  
  int first = n * 0.78;
  int two = n-((n*0.2)*0.22);
  printf("%d %d",first, two);
}