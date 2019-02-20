// https://hsp1116.tistory.com/29

function solution(arr) {
  const stack = []
  let result = 0

  for(let i=0; i<arr.length; i++){
    if(arr[i] === '(') stack.push('(')
    else {
      // ) 만나면 일단 바로 pop
      stack.pop()    

      // 레이저일 경우 stack의 길이만큼 push해줌
      if(arr[i-1] === "(") {        
        result += stack.length
      }else{
        result += 1
      }      
    }
  }
  return result
}


// console.log(solution("()(((()())(())()))(())")) // 17

function sol(arr){
  console.log(arr.split('()'))

  

}

console.log(sol("((()()))"))