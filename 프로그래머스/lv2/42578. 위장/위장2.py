from collections import Counter
from functools import reduce
def solution(clothes):
  counter = Counter([type for clothe, type in clothes])

  # reduce(집계 함수, 순회 가능한 데이터[, 초기값])
  # reduce(lambda acc, cur: acc + cur["age"], users, 0)
  
  answer = reduce(lambda acc, cur: acc * (cur + 1), counter.values(), 1)
  return answer - 1
