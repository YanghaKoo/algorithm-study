// https://programmers.co.kr/learn/courses/30/lessons/42896?language=javascript


// 재귀적 해결법
function solution_recur(left, right) {
  if (left.length === 0 || right.length === 0) {
    return 0;
  }
  // 왼쪽의 최대값이 오른쪽보다 크다면 오른쪽 배열의 합이 답
  else if (Math.max(...left) > Math.max(...right))
    return right.reduce((acc, cur) => {
      return acc + cur;
    });
  else {
    return Math.max(
      solution(left.slice(1), right),
      solution(left.slice(1), right.slice(1)),
      solution(left, right.slice(1)) + right[right.length - 1]
    );
  }
}

// console.log(solution_recur([3, 2, 5], [2, 4, 1])); // 7


// Bottom up 해결법
function solution(left, right) {
  const ans = new Array(left.length + 1)
    .fill(0)
    .map(x => new Array(right.length + 1).fill(-1));

  // 가장자리 부분 0으로 체킹 완료
  for (let i = 0; i <= left.length; i++) ans[i][right.length] = 0;
  for (let i = 0; i <= right.length; i++) ans[left.length][i] = 0;
  

  // 가장자리 부분을 제외한 부분 루프를 돌리기
  for (let i = left.length - 1; i >= 0; i--) {
    for (let j = right.length - 1; j >= 0; j--) {

        // 제대로 되고 있음
        const nowLeft = left.slice(i)
        const nowRight = right.slice(j)

                              
        if (Math.max( ...nowLeft ) > Math.max(...nowRight)) {
          ans[i][j] = nowRight.reduce((acc, cur) => acc + cur);
        } else {                               
          if(nowLeft[0] > nowRight[0]) {                               
            // 오른의 0번이 더 작을 경우 --> 모든 케이스 가능
            ans[i][j] =  Math.max(
              ans[i + 1][j],
              ans[i + 1][j + 1],
              ans[i][j + 1] + nowRight[0]
              )
          }else{
            // 왼쪽의 0번이 더 작을 경우 --> 오른쪽 버리기 할 수 없음
            ans[i][j] = Math.max(
              ans[i + 1][j],
              ans[i + 1][j + 1]                                           
              )
          }
      }
    }
  } // for 종료
  console.log(ans);
  return ans[0][0];
}

console.log(solution([3,2], [4,1,3])); // 7


