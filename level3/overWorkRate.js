function solution(n, works) {
  for (let i = 0; i < n; i++) {
    var max = Math.max.apply(null, works);

    const a = works.indexOf(max);
    if(works[a] === 0) return 0;    
    works[a] = works[a] - 1;
  }
  
  let result = 0;
  for(let i in works){
    result += works[i]*works[i]
  }
  return result
}

console.log(solution(4, [4, 3, 3]))


// 회사원 Demi는 가끔은 야근을 하는데요, 야근을 하면 야근 피로도가 쌓입니다. 
// 야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값입니다. 
// Demi는 N시간 동안 야근 피로도를 최소화하도록 일할 겁니다.
// Demi가 1시간 동안 작업량 1만큼을 처리할 수 있다고 할 때, 
// 퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 야근 피로도를 최소화한 값을 리턴하는 함수 solution을 완성해주세요.
