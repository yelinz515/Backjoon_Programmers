n = int(input())
result = []

for i in range(n):
  result.append(int(input()))

for j in range(1, len(result)):
  while (j>0) & (result[j] < result[j-1]):
    result[j], result[j-1] = result[j-1], result[j]
    j-=1

for n in result:
  print(n)