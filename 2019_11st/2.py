# 3(hi) -> hihihi
# 10(p) -> pppppppppp
# 2(2(hi)2(co))x2(bo) -> hihicocohihicocoxbobo

# 길이는 1이상 100이하, 항상 올바름(예외상황없음)

# '(' 다음에 알파벳 소문자가 나왔는지, 숫자가 나왔는지
# 2번 반복 / 2번 반복 -> 꺼내서 알파벳 소문자만큼 반복
# 2번 반복 / 2번 반복 -> 꺼내서 알파벳 소문자만큼 반복
# ')'가 나오면 이전 내용을 concat
# 문자가 나오면 바로 concat

# 1. 현재 나온 문자가 case 1 '(', case 2 ')', case 3 'a~z', case 4 '0~9' 인지 확인
# 2. 나온 문자가 case 1인 경우, 지금까지 저장된 number을 string to number로 type casting 다시 1을 반복
# 3. 나온 문자가 case 2인 경우 지금까지의 문자열을 number만큼 반복
# 4. 나온 문자가 case 3인 경우 지금까지의 문자열에 concat
# 5. 나온 문자가 case 4인 경우 number을 일단 임시 저장


class Stack:
    def __init__(self):
        self.stack = []
        self.len = 0

    def push(self, item):
        self.len += 1
        self.stack.append(item)

    def pop(self):
        self.len -= 1
        return self.stack.pop()

    def peek(self):
        return self.stack[self.len-1]

    def length(self):
        return self.len


# 스택을 사용한 이유 : infix를 postfix로 바꾸는 과정이랑 알고리즘이 유사해서
# 자세한 설명참고 : https://debuglog.tistory.com/72

def solution2(input_str):
    # 1. 반복숫자를 저장하는 변수 ex 2(bi)에서 '2'에 해당
    str_temp_repeat_number = ''
    # 2. 스택 초기화
    sol_stack = Stack()

    # 3. 케이스 나눠주기
    case1 = '('
    case2 = ')'
    case3 = 'abcdefghijklmnopqrstuvwxyz'
    case4 = '0123456789'

    # 4. 주어진 문자열의 길이만큼 반복
    for now_char in input_str:
        print(sol_stack.stack)
        # case1: 만약 현재 문자가 여는괄호 '('이라면,
        if now_char in case1:
            # 지금까지 concat된 문자열 형태의 반복숫자를 숫자로 타입캐스팅해주고
            repeat_number = int(str_temp_repeat_number)
            # 이후 새로운 반복숫자를 받기 위해 초기화해준다
            str_temp_repeat_number = ''
            # 스택에 반복숫자와 현재 문자 '(' 을 차례로 넣어준다
            sol_stack.push(repeat_number)
            sol_stack.push(now_char)
            continue

        # case2: 만약 현재 문자가 닫는괄호 ')' 라면,
        if now_char in case2:
            str_temp = ''
            while isinstance(sol_stack.peek(), str) and sol_stack.peek() not in case1:
                # 여는 괄호를 만나기 전까지 스택에 있는 문자들을 차례로 모두 뺀다
                # ex [ 2,'(','b','o','b','o'] 형태로 저장되어 있었다면
                # str_temp = 'o' + ''                    // 스택 상태 : [ 2,'(','b','o','b']
                # str_temp = 'b' + 'o'                   // 스택 상태 : [ 2,'(','b','o']
                # str_temp = 'o' + 'bo'                  // 스택 상태 : [ 2,'(','b']
                # str_temp = 'b' + 'obo' 의 순서로 작동한다  // 스택 상태 : [ 2,'(']
                str_temp = sol_stack.pop() + str_temp
            # 여는 괄호 '(' 를 뺀다 // 이후 스택 상태 : [ 2 ]
            sol_stack.pop()
            # 반복되는 숫자만큼 str_temp를 반복시킨다음 solution stack에 집어넣는다. // 이후 스택 상태 : [ ]
            sol_stack.push(sol_stack.pop() * str_temp)
            continue

        # case3 : 만약 현재 문자가 알파벳이라면 solution stack에 집어 넣는다
        if now_char in case3:
            sol_stack.push(now_char)
            continue

        # case3 : 만약 현재 문자가 숫자라면 now_char에 이어 붙인다 ex 10(bo)에서 '10'이 한번에 들어오는 것이 아닌, '1'이 들어오고 '0'이 들어온다
        if now_char in case4:
            str_temp_repeat_number += now_char
            continue



    answer = ''
    while sol_stack.length() > 0:
        answer = sol_stack.pop() + answer
    print(answer)
    return answer



solution2("aa2(2(hi)2(co))x2(bo)")

