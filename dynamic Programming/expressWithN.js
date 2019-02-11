// 프로그래머스 동적프로그래밍 1번문제


// 5 12 --> 4
function solution(N, number) {
  let answer= 0;

  const dp = new Array(9).fill(0).map(v=>[]);
  const cnt = []
  dp[1].push(N)
  cnt[N] = 1;

  for(let i=2; i<=8; i++){
    const shift = dp[i-1][0] * 10 + N // 5를 55로, 55를 555로
    dp[i].push(shift)
    cnt[shift] = i;
    
    
    for(let j = 1; j < i; j++) {
      dp[j].map(x => {
          dp[i - j].map(y => {
              if(!cnt[x + y]) dp[i].push(x + y), cnt[x + y] = i;
              if(!cnt[x - y]) dp[i].push(x - y), cnt[x - y] = i;
              if(!cnt[y - x]) dp[i].push(y - x), cnt[y - x] = i;
              if(!cnt[x * y]) dp[i].push(x * y), cnt[x * y] = i;
              if(x % y === 0 && !cnt[x / y]) dp[i].push(x / y), cnt[x / y] = i;
          })
      })
  }




  }
  console.log(dp)
  












  return answer
}

console.log(solution(5,12))