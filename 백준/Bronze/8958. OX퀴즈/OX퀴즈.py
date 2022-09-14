a = int(input())
for i in range(a):
  num = list(input())
  sum = 0
  count = 0
  for i in num:
    if i == 'O':
      count += 1
      sum = sum + count
    elif i == 'X':
      count = 0
  print(sum)