#include <stdio.h>
int main(){
  int n;
  int a[100];
  scanf("%d\n",&n);

  for(int j=0; j<n; j++){
    scanf("%d",&a[j]);
  }

  int v;

  scanf("%d",&v);
  
  int count =0;
  
  for(int i=0; i<n; i++){
    if(v == a[i])
      count++;
  }
  printf("%d",count);
}