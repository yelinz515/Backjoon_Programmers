def solution(priorities, location):
    # 큐를 만든다
    printer = [(i,p) for i,p in enumerate(priorities)]
    turn = 0
    while printer:
        job = printer.pop(0)
        # 뒤에보다 중요도가 높지 않으면 뒤로 간다
        if any(job[1] < other_job[1] for other_job in printer):
            printer.append(job)
        # 아니면 턴을 추가하여 location과 같으면 turn 수를 출력
        else:
            turn += 1
            if job[0] == location:
                break
    return turn

        
