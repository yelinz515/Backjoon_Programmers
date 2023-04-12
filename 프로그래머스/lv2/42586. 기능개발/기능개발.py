import math
def solution(progresses, speeds):
    # 100 - progresses / speeds
    restProg = list(map(lambda x: math.ceil((100 - progresses[x]) / speeds[x]), range(len(progresses))))
    
    count = 1
    newArr = []
    
    for i in range(len(restProg)):
        try:
            # 이전 인덱스가 작으면 count = 1
            if restProg[i] < restProg[i+1]:
                newArr.append(count)
                count = 1
            # 아니라면 count += 1
            else:
                restProg[i+1] = restProg[i]
                count += 1            
        except IndexError:
            newArr.append(count)
    return newArr