function test(string){
  let answer = ''
  for(let i = string.length -1; i >= 0; i--) answer += string[i]
  return answer
}

console.log(test("asdfzxcqwe"))