from collections import deque
def solution(bridge_length, weight, truck_weights): 
    # 다리 무게
    bridge_weight = 0
    # 시간
    time = 0
    # 각 트럭의 무게 모음
    truck_weights = deque(truck_weights)
    # 현재 다리를 건너고 있는 트럭 무게
    truck_bridge = deque([0 for _ in range(bridge_length)])
    
    while truck_bridge:
        time += 1
        if truck_bridge[0] != 0: 
            bridge_weight -= truck_bridge[0]
        truck_bridge.popleft()
        if truck_weights:
            if bridge_weight + truck_weights[0] <= weight:
                bridge_weight += truck_weights[0]
                truck_bridge.append(truck_weights.popleft())
            else:
                truck_bridge.append(0)
    return time