from collections import deque
def solution(bridge_length, weight, truck_weights):
    # 트럭 무게
    truck_w = deque(truck_weights)
    # 현재 다리를 건너고 있는 트럭 무게
    bridge_l = deque([0 for _ in range(bridge_length)])
    
    bridge_weight = 0
    time = 0
    
    while bridge_l:
        time += 1
        # 만약에 건너고 있는 트럭 무게가 0이 아니면
        if bridge_l[0] != 0:
          # 다리 무게에서 현재 다리를 건너고 있는 트럭 무게를 뺀다
          bridge_weight -= bridge_l[0]
        # 다리를 지났으면 빠진다
        bridge_l.popleft()
        if truck_w:
          # 다리 무게 + 트럭 무게 가 전체 체중보다 작으면
          if truck_w[0] + bridge_weight <= weight:
            # 현재 다리 무게에 트럭 무게를 더해 현재 다리 무게를 업데이트 한다
            bridge_weight += truck_w[0]
            # 다리에 트럭을 추가한다.
            bridge_l.append(truck_w.popleft())
          # 다리 무게 + 트럭 무게 가 전체 체중보다 크면
          else:
            bridge_l.append(0)
        
    return time