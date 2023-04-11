def solution(numbers):
    # result : 조합해서 가장 큰 수
    # https://esoongan.tistory.com/103
    num = list(map(str, numbers))
    num.sort(key = lambda x: x*3, reverse=True)
    return str(int(''.join(num)))
    
