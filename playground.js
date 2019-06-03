function convert(param){
  const stack = []
  const priority = { '+' : 2, '-' : 2, "*" : 1, "/" : 1, '(' : 0}
  let answer = ''

  for(let i =0; i<param.length; i++){
  
    if(param[i] === "+" || param[i] === "+" || param[i] === "*" || param[i] === "/"){
      

      stack.push(param[i])

    }else if(param[i] === '('){
      stack.push(param[i])


    }else if(param[i] === ')'){
      while(stack.pop() !== '('){
        answer += param[i]        
      }  
    
    }
    else{
      answer += param[i]

    }





  }


  return answer
}


console.log(convert("(a+b-c)*d*e"))


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
