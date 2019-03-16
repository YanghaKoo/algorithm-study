table1Num = int(input())
results = []
category = []
inputs = {}

# 3이면 0,1,2
for i in range(0,table1Num):            
    temp = input().split(' ')
    
    # j는 id, name, occupation        ,   1, yangha, student
    for j in temp:
        if i == 0:
            category.append(j)
        else :
            b = {}
            b[category[i]] = j        
            results.append(b)    
            


print(b)


        





# a, b,c,d,e = map(int, input().strip().split(' '))
# print(a ,b,c,d,e)