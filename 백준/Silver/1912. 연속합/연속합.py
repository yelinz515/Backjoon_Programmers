a = int(input())
b = list(map(int, input().split()))

for i in range(1, a):
  b[i] = max(b[i],b[i-1] + b[i])

print(max(b))