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
# 5. 나온 문자가 case 4인 경우 number을 일단 임시 저 장


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


def solution2(input_str):
    str_temp_repeat_number = ''
    sol_stack = Stack()
    case1 = '('
    case2 = ')'
    case3 = 'abcdefghijklmnopqrstuvwxyz'
    case4 = '0123456789'
    for now_char in input_str:
        if now_char in case1:
            repeat_number = int(str_temp_repeat_number)
            str_temp_repeat_number = ''
            sol_stack.push(repeat_number)
            sol_stack.push(now_char)
            continue

        if now_char in case2:
            str_temp = ''
            while isinstance(sol_stack.peek(), str) and sol_stack.peek() not in case1:
                str_temp = sol_stack.pop() + str_temp
            sol_stack.pop()
            sol_stack.push(sol_stack.pop() * str_temp)
            continue

        if now_char in case3:
            sol_stack.push(now_char)
            continue

        if now_char in case4:
            str_temp_repeat_number += now_char
            continue

    answer = ''
    while sol_stack.length() > 0:
        answer = sol_stack.pop() + answer
    print(answer)
    return answer



