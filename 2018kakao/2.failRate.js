function solution(N, stages) {
  const obj = {};
  for (let i = 1; i <= N; i++) {
    obj[i] = 0;
  }

  stages.forEach(v => {
    if (v !== N + 1) obj[v]++;
  });

  let stay = 0;
  let stayed = stages.length;
  let answer = [];

  for (let key in obj) {
    stay = obj[key];

    if (stayed == 0 || stay == 0) {
      answer.push({ stage: key, rate: 0 });
    } else {
      answer.push({ stage: key, rate: stay / stayed });
    }
    stayed = stayed - stay;
  }

  answer.sort((a, b) => {
    if (b.rate > a.rate) {
      return 1;
    } else if (b.rate < a.rate) {
      return -1;
    } else if (b.rate == a.rate) {
      return a.stage - b.stage;
    }
  });

  return answer.map(v => Number(v.stage));
}

// function solution(N, stages) {
//   const answer = [];

//   for (let i = 1; i <= N; i++) {

//     const a = stages.filter(stage => stage > i);
//     const b = stages.filter(stage => stage === i);

//     if ( a.length + b.length === 0) answer.push({ stage: i, rate: 0 })
//     else {
//       const bunmo = a.length + b.length;
//       const bunza = b.length;
//       const failRate = Number((bunza / bunmo).toFixed(10));
//       answer.push({
//         stage: i,
//         rate: failRate
//       });
//     }
//   }

//   answer.sort((a, b) => {
//     if (a.rate > b.rate) return -1;
//     if (a.rate < b.rate) return 1;
//     return a.stage < b.stage ? -1 : 1;
//   });

//   return answer.map(item => {
//     return item.stage;
//   });
// }

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
