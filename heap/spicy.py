def solution(sco, K):    
    sco.sort()
    num = 0
    
    while sco[0] < K:
      
      a = sco.pop(0)
      b = sco.pop(0)
      a = a + 2*b
      sco.append(a)
      sco.sort()      
      num += 1    
    return num




print(solution([1, 2, 3, 9, 10, 12],7))  #2