def solution(arr):
    if arr == [] or len(arr) <= 1:
        return [-1]
    
    # 가장 작은 수를 뽑지만 출력은 그대로
    arr.remove(min(arr))
    return arr