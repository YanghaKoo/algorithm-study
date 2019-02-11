// https://programmers.co.kr/learn/courses/30/lessons/43105?language=javascript
// 프로그래머스 동적계획법 정수 삼각형 문제

//
function solution(triangle) {
  let ans = triangle.map(item => []);
  const arr = [];

  for (let i = 0; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (ans[i][j]) return ans[i][j];
      else {
        if (j === 0) {
          let temp = 0;
          for (let k = 0; k < i; k++) temp += triangle[k][j];
          ans[i][j] = temp + triangle[i][j];
          if (i === triangle.length - 1) arr.push(ans[i][j]);
        } else if (j === i) {
          let temp = 0;
          for (let k = 0; k < i; k++) temp += triangle[k][k];
          ans[i][j] = temp + triangle[i][j];
          if (i === triangle.length - 1) arr.push(ans[i][j]);
        } else {
          ans[i][j] =
            Math.max(ans[i - 1][j - 1], ans[i - 1][j]) + triangle[i][j];
          if (i === triangle.length - 1) arr.push(ans[i][j]);
        }
      }
    }
  }
  return Math.max(...arr);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));

// function recur(triangle, ans, i, j) {
//   //   if (ans[i][j] !== -1) return ans[i][j];
//   else {
//     if (j === 0) {
//       let temp = 0;
//       for (let k = 0; k < i; k++) temp += recur(triangle, ans, k, 0);
//       ans[i][j] = temp;
//       return temp;
//     } else if (j === i) {
//       let temp = 0;
//       for (let k = 0; k < i; k++) temp += recur(triangle, ans, k, k);
//       ans[i][j] = temp;
//       return temp;
//     } else {
//       ans[i][j] =
//         triangle[i][j] +
//         Math.max(
//           recur(triangle, ans, i - 1, j - 1),
//           recur(triangle, ans, i - 1, j)
//         );
//       return ans[i][j];
//     }
//   }
// }

// function solution(triangle) {
//   // 초기 세팅(recursive 하게 돌지 않음)
//   const length = triangle.length - 1; // 4
//   let ans = triangle.map(item => item.map(x => -1));
//   //console.log(ans);

//   recur(triangle, ans, length, length);
//   console.log(ans);

//   return ans[length][length];

//   // let ans = new Array(triangle.length).fill(0).map(item => [])
//   // for(let i =0; i< triangle.length; i++){
//   //   for(let j=0; j<triangle[i].length; j++){
//   //     ans[i][j] = -1;
//   //   }
//   // }
// }
