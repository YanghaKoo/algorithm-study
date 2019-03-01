def solution(bridge_length, weight, truck_weights):
    q=[0]*bridge_length    
    sec=0
    while q:        
        sec+=1            #시작했으므로 1초씩 더함
        q.pop(0)          #트럭이 지나감
        if truck_weights:
            if sum(q)+truck_weights[0]<=weight:
                q.append(truck_weights.pop(0))  #다리에 트럭 올림
            else:
                q.append(0)    #중량 초과면 트럭 안올림              
    return sec

print(solution(2,10,[7,4,5,6]))
print(solution(100,100,[10]))
print(solution(100,100,[10,10,10,10,10,10,10,10,10,10]))


