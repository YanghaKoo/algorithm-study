import operator

def solution(N, stages):
    answer = []
    
    for i in range(0,N):
      i = i +1 
      a = list(filter(lambda x : x > i, stages))
      b = list(filter(lambda x : x == i, stages))
      #print(a,b)
      
      if len(a) == 0 and len(b) == 0:
        answer.append({"stage" : i, "rate" : 0})
      else :
        bunmo = len(a) + len(b)
        bunza = len(b)
        failRate = bunza/bunmo
        answer.append({"stage" : i, "rate" : failRate})
    
     
    #answer = sorted(answer.items(), key=operator.itemgetter(1))    
    answer.sort(key=lambda x: (x['rate'], 500- x['stage']), reverse=True)
    answer2 = []
    for i in answer:
      answer2.append(i["stage"])


    return answer2
    
    



print(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]))

