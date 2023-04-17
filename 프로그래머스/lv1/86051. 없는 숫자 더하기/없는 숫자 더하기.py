def solution(numbers):
    result = 0
    
    for num in range(0, 10):
        if num not in numbers:
            result += num
    return result