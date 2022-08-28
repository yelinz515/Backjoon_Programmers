peace = [1,1,2,2,2,8]
count = list(map(int,input().split()))
for i in range(6):
  print(peace[i]-count[i],end=' ')