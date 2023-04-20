def solution(n):
    count = 0   
    arr = [True] * (n+1)
    
    for i in range(2, n+1):
        if arr[i]:
            arr.append(i)
            count += 1
            for j in range(2*i, n+1, i):
                arr[j] = False
    
    return count