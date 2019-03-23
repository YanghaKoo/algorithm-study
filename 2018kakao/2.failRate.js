function solution(N, stages) {
  const answer = [];

  for (let i = 1; i <= N; i++) {
    const a = stages.filter(stage => stage > i);
    const b = stages.filter(stage => stage === i);
    // console.log(a,b)
    if ( a.length + b.length === 0) answer.push({ stage: i, rate: 0 })
    else {
      const bunmo = a.length + b.length;
      const bunza = b.length;
      const failRate = Number((bunza / bunmo).toFixed(10));
      answer.push({
        stage: i,
        rate: failRate
      });
    }
  }


  answer.sort((a, b) => {
    if (a.rate > b.rate) return -1;
    if (a.rate < b.rate) return 1;
    return a.stage < b.stage ? -1 : 1;
  });
  
//  console.log(answer)

  return answer.map(item => {
    return item.stage;
  });
}

console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]

