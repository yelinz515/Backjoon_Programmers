#include <stdio.h>

int main(void) {
  int a,b;
  scanf("%d %d",&a ,&b);
  
  int c[a][b],d[a][b];
  for(int i=0; i<a; i++)
    for(int j=0; j<b; j++)
      scanf("%d",&c[i][j]);

  for(int i=0; i<a; i++)
    for(int j=0; j<b; j++)
      scanf("%d",&d[i][j]);
  
  for(int i=0; i<a; i++){
    for(int j=0; j<b; j++){
        c[i][j]+=d[i][j];
        printf("%d ",c[i][j]);
      }
    printf("\n");
    }
  return 0;
}