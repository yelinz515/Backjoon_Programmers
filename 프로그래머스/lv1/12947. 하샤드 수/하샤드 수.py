def solution(x):
    arr = list(map(int, str(x)))
    result = 0
    
    for i in arr:
        result += i
    
    return x % result == 0