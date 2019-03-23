function solution(N, stages) {
  const obj = {}
  for(let i=1; i<=N; i++) {
      obj[i] = 0;
  }

  // 스테이지에 머물고있는 인원 파악
  stages.forEach((v) => {
      if(v !== N+1) {
      obj[v] += 1;
      }
  })

  // 계산
  let stay = 0;
  let stayed = stages.length;
  const failPercentageArr = [];
  for(let key in obj) {
      stay = obj[key];
      console.log(stay, '/', stayed);
      if(stayed == 0 || stay == 0) {
          failPercentageArr.push({stage: key, fail: 0});            
      } else {
          failPercentageArr.push({stage: key, fail: stay/stayed});
      }
      stayed = stayed - stay;
  }

  // 정렬
  failPercentageArr.sort((a,b) => {
      if (b.fail > a.fail) {
          return 1;
      } else if (b.fail < a.fail) {
          return -1;
      } else if (b.fail == a.fail) {
          return a.stage - b.stage
      }
  })

  return failPercentageArr.map((v) => {
      return Number(v.stage);
  })
}