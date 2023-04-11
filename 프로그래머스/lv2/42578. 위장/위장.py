def solution(clothes):
    # clothes1 * clothes2 - none
    # type에 맞게 clothes 개수 세기.
    hash_map = {}
    for clothe, type in clothes:
      # 해당 수를 세기 위해 디폴트 값 1로 채운다
      hash_map[type] = hash_map.get(type, 0) + 1
    print(hash_map)

    # {'headgear': 2, 'eyewear': 1}에서 none(입지 않아도 됨)를 포함하기 위해
    # 1를 더하고, 곱한다
    answer = 1
    for type in hash_map:
        answer *= hash_map[type] + 1

    # 전체 조합을 계산하고, 아무것도 입지 않는 경우를 빼준다
    return answer -1 