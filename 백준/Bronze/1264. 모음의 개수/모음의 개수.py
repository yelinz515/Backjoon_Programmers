while (True):
    cnt = 0
    a = input()
    if a == '#':
        break
    for i in a:
        if i in 'aeiouAEIOU':
            cnt += 1
    print(cnt)
