

function solution(begin, target, words) {
// 문자열 2개의 다른 것의 수와 다른 부분이 어딘지
  function check(str1, str2){
    let diffCount = 0
    let indexes = []
    for(let i=0; i<str1.length; i++){
      if(str1[i] !== str2[i]) {diffCount++; indexes.push(i)}
    }
    return { diffCount, indexes  }
  }


  const answerAble = []

  // 목록에 target이 없으면 0 리턴시킴
  if (!words.find(r => r === target)) return 0;
  else if(check(begin, target).diffCount ===0) return 0

  else {
    
    // 새로운 begin이 가능한 애들
    const beginAble = words.filter(r => {
      return check(begin, r).diffCount === 1
    })  
  
    beginAble.map(r=>{
      if(check(r,target).indexes.length < check(begin,target).indexes.length) answerAble.push(solution(r,target, words) + 1)
    })

    console.log(answerAble)
  }  
}


console.log("1번")
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));

