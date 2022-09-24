eng = input()
al = "abcdefghijklmnopqrstuvwxyz"
for i in al:
  if i in eng:
    print(eng.index(i),end=' ')
  else:
    print(-1, end=' ')
  
  