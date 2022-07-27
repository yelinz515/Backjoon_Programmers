while True:
  b = list(map(int, input().split()))
  maxn = max(b)
  if sum(b) == 0:
    break
  b.remove(maxn)
  if(int(b[0])**2 + int(b[1])**2 == int(maxn)**2):
    print('right')
  else:
    print('wrong')