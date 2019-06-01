// 아스키 코드값 보기, 문자열.charCodeAt(idx)

function solution(str1, str2) {
  if(str1.length > str2.length) return -1
  else if(str1.length < str2.length) return 1

  for (let i = 0; i < str1.length; i++) {
    if (str1.charCodeAt(i) === str2.charCodeAt(i)) continue;
    else return str1.charCodeAt(i) - str2.charCodeAt(i);
  }
  return 0;
}

console.log(solution("abc", "abcd")); // 음수 값










// const readline=require("readline");

// const rl =readline.createInterface({
//   input:process.stdin,
//   output:process.stdout
// });

// rl.setPrompt("## ");

// rl.prompt();
// rl.on("line",(data)=>{
//   console.log(data);
//   rl.prompt();
// });
