import sys
x = int(sys.stdin.readline())
arr = []

for i in range(x):
    arr.append(int(sys.stdin.readline()))
arr.sort()
  
for j in arr:
    print(j)