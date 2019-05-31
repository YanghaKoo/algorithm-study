function solution(string){
  let answer = 0
  let length = string.length // 4

  for(let i=0; i<string.length; i++){
    answer += Number(string[i]) * Math.pow(2,length - i -1)
  }
  return answer
}

console.log(solution("1011")) // r













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
 
