// fibonachi 메모리제이션 방식

// const f = new Array(100).fill(-1)
function fib(n) {
  if (n === 1 || n === 2) return 1;
  else if (f[n] > -1) return f[n];
  else {
    f[n] = fib(n - 2) + fib(n - 1);
    return f[n];
  }
}

// fibonachi bottom up 방식
// 그냥 앞에서부터 쭉 다 더하는 것
// 이걸 다이나믹 프로그래밍이라고 한다!!!
// 이렇게 botton up 방식으로 계산하는 방식!!
// 순환식을 바텀업 방식으로 이용하는 과정!
const f = [];
function fib2(n) {
  f[0] = f[1] = f[2] = 1;
  for (let i = 3; i <= n; i++) f[i] = f[i - 2] + f[i - 1];
  return f[n];
}

// ---------------------------------------------------------------------------------

// 이항계수 문제
// nCk n개중에서 k개를 선택하는 경우의 수
function binomial(n, k) {
  if (n === k || k === 0) return 1;
  else return binomial(n - 1, k) + binomial(n - 1, k - 1);
}
// 이렇게 재귀로 풀면 많은 계산이 중복됨 나쁜방법

// 이걸 메모리제이션으로 풀면
// 2차원 배열로 풀어야지
// 2차원 배열에 중간 계산 결과를 저장을 해놓는거지
const binom = [];
for (let i = 0; i < 10; i++) binom.push(new Array(10).fill(-1));

// 메모리얼 방식(캐싱)
function binomial2(n, k) {
  if (n === k || k === 0) return 1;
  else if (binom[n][k] > -1) return binom[n][k];
  else {
    binom[n][k] = binomial2(n - 1, k) + binomial2(n - 1, k - 1);
    return binom[n][k];
  }
}

// 동적계획법(bottom up) 방식으로 하는거도 역시 이차원 배열을 다 채우는건데
// 예를들어 내가  5C3를 원한다면. 이 값을 계산하기 위해서 필요한 값들을 테이블에 순차적으로 저장한다는 뜻이지
// 2차원 배열에선 바텀업으로 어떤 순서로 해야할 것인가?? 가 문제임
// 그런데 뭐가 바텀이냐?? 이걸 보는게 좀 애매함 이게 문제임
// 결국 순환식의 ㅇ오른쪽에 등장하는 값들이 순환식의 왼쪽에 등장하는 값보다 항상 먼저 계산되어야 한다!!!!!!!!!!!!! 이게 중요한건데

// 그림으로 그려보면 , 해당 셀의 대각위와 바로위에 애를 봐야한다.
// 따라서 행 우선으로 순서대로 간다면 내걸 계산할 떄 위에애들은 모두 계산이 되어있는 상태이다.
// 우린 n행 k열의 값을 원한다.
function binomial3(n, k) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= k && j <= i; j++) {
      // j<=i 이건 대각선 윗부분을 날리는 것 굳이 필요가 없음
      if (i === j || j === 0) binom[i][j] = 1;
      else binom[i][j] = binom[i - 1][j] + binom[i - 1][j - 1];
    }
  }
}

// 행렬 경로 문제
// 0,0에서 오른쪽이나 아래로만 가는데 합이 최소가 되게 3,3으로 가는 경로구하기
const problem = [[6, 7, 12, 5], [5, 3, 11, 18], [7, 17, 3, 3], [8, 10, 14, 9]];

const _answer = [
  [-1, -1, -1, -1],
  [-1, -1, -1, -1],
  [-1, -1, -1, -1],
  [-1, -1, -1, -1]
];

// 내풀이, 메모라이제이션 방법
function mySolution(problem, x, y) {
  if (_answer[x][y] !== -1) return _answer[x][y];
  if (x === 0 && y === 0) return problem[x][y];
  else if (x === 0) {
    let answer = 0;
    for (let i = 0; i <= y; i++) {
      answer += problem[0][i];
      _answer[0][i] = answer;
    }
    return answer;
  } else if (y === 0) {
    let answer = 0;
    for (let i = 0; i <= x; i++) {
      answer += problem[i][0];
      _answer[i][0] = answer;
    }
    return answer;
  } else {
    _answer[x][y] =
      problem[x][y] +
      Math.min(mySolution(problem, x - 1, y), +mySolution(problem, x, y - 1));
    return _answer[x][y];
  }
}

// console.log(mySolution(problem, 3, 2))
// console.log(_answer)

// 혹은 바텀업 방식으로 할 수 있는데
// 이걸 0,0 0,1, 0,2 0,3, 1,1, 1,2, ... 이순서대로 올라가면 바텀업이 가능함
// i가 행, j가 열이라면
// 항상 먼저계산되기 때문에...
// 시간복잡도는 포문 2개도니까 O(n^2)이지
function solution(problem) {
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      if (i === 0 && j === 0) _answer[i][j] = problem[i][j];
      else if (i === 0) {
        _answer[i][j] = _answer[i][j - 1] + problem[i][j];
      } else if (j === 0) {
        _answer[i][j] = _answer[i - 1][j] + problem[i][j];
      } else {
        _answer[i][j] =
          Math.min(_answer[i - 1][j], _answer[i][j - 1]) + problem[i][j];
      }
    }
  }
  return _answer[3][3];
}

// console.log(solution(problem))
// console.log(_answer)

/*
  동적계획법에 대해 이런저런 얘기를 했는데, 본질적인 얘기를 할 것임
  이번시간에는 optimal structure 
  
  기본적으로 순환식을 계산의 중복없이 푸는 방법
  
  보통 동적계획법은 아래 문제들을 푸는 테크닉이다.
  최적화문제(optimization problem)  - 최대값 / 최소값을 구하는 것
  카운팅(counting problem)-  조건을 만족하는 해의 개수를 구하는 문제

  먼저 순환식을 세우고, 그 다음에 그 순환식을 계산의 중복 없이 풀게 하는 법임
  순환식을 세우는 부분이 가장 어려운 부분임

   s v u 가 있을대
   s에서 u까지 가는 최적해를 구하는데 
   s에서 v까지 가는 길이 s~v까지 가는 최단거리의 최적해인가? 이런 질문을 하는걸로 최적해를 구하는게 시작됨

   순환식을 세우는 요령 : 
    최적해의 일부분이 그 질분에 대한 최적해인가? 
 */

/*
  Matrix-chain Multiplication 문제
  행렬 체인의 곱 A행렬 * B행렬 * C행렬 이렇게 한다는 거지
  행렬은 곱하는 순서에 대해 연산량이 다르다.
  
  A1A2...An까지 n개으 ㅣ행렬이 있을때 결합법칙을 통해서 계산량을 가장 적게 하는게 중요하겠지
  (항상 연속되는 두 행렬의 앞행렬의 열의 수과 뒷행렬의 행의 수는 같다는 가정)

  동적계획법으로 풀어야하니까 순환식을 만들어서 순환식을 메모리제이션, 바텀업으로 풀어야 하니깐
  어떤 optibal substructure를 확인하는지를 알아봐야지

*/
let m = [];
for (let i = 0; i < 10; i++) {
  m.push(new Array(10));
}

function matrixChain(n) {
  // 일단 대각선 부분은 항상 0이니까 ( i == j)
  for (let i = 1; i <= n; i++) m[i][i] = 0;

  // 대각선 시작
  for (let r = 1; r <= n - 1; r++) {
    // 각 대각선의 값의 개수
    for (let i = 1; i <= n - r; i++) {
      // r번째 대각선의 i번째 값을 계산하면 됨
      let j = i + r;
      m[i][j];
    }
  }
}

// Longest Common Subsequences 문제
// 이건 recursion으로 풀어버렸네
function LCS(str1, str2) {
  const length1 = str1.length - 1;
  const length2 = str2.length - 1;
  if (str1.length === 0 || str2.length === 0) return 0;

  if (str1[length1] === str2[length2]) {
    return LCS(str1.slice(0, length1), str2.slice(0, length2)) + 1;
  } else {
    return Math.max(
      LCS(str1.slice(0, length1), str2),
      LCS(str1, str2.slice(0, length2))
    );
  }
}

// bottom up 방법으로 다이나믹 그냥 순서대로 하면 됨
function LCSdynamic(str1, str2) {
  const length1 = str1.length;
  const length2 = str2.length;

  const c = new Array(length1 + 1)
    .fill(0)
    .map(x => new Array(length2 + 1).fill(-1));

  for (let i = 0; i <= length1; i++) {
    c[i][0] = 0;
  }
  for (let j = 0; j <= length2; j++) {
    c[0][j] = 0;
  }

  for (let i = 1; i <= length1; i++) {
    for (let j = 1; j <= length2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        c[i][j] = c[i - 1][j - 1] + 1;
      } else {
        c[i][j] = Math.max(c[i - 1][j], c[i][j - 1]);
      }
    }
  }

  console.log(c);
  return c[length1][length2];
}

//  console.log(LCSdynamic("abcbdab","bdcaba")) //4





// knapsack 문제
// 가치 - 무게
const pw = [null, [10, 5], [40, 4], [30, 6], [50, 3]];

// 수용 가능 무게
const weight = 10;

function knapsack(pw, weight) {
  // 물건의 개수
  const length = pw.length;
  const ans = new Array(length)
    .fill(0)
    .map(x => new Array(weight + 1).fill(-1));

  for (let i = 0; i < length; i++) ans[i][0] = 0;
  for (let i = 0; i <= weight; i++) ans[0][i] = 0;

  // i가 1부터 아이템들, j가 현재 무게
  for(let i=1; i<length; i++){
    for(let j=1; j<=weight; j++){
      if( pw[i][1] > j) ans[i][j] = ans[i-1][j]
      else{
        ans[i][j] = Math.max(ans[i-1][j], ans[i-1][j-pw[i][1]] + pw[i][0] )
      }
    }
  }
  console.log(ans);
  return ans[length-1][weight]
  
}

// console.log(knapsack(pw, weight)); // 90





// LCS 다시
function llcs(str1, str2){
  const length1 = str1.length // 7
  const length2 = str2.length // 8

  const ans = new Array(length1+1).fill(0).map(x=>new Array(length2+1).fill(-1))
  
  for(let i=0; i<=length1; i++) ans[i][0] = 0
  for(let i=0; i<=length2; i++) ans[0][i] = 0

  for(let i=1; i<=length1; i++){
    for(let j=1; j<=length2; j++){
      if(str1[i-1] === str2[j-1]){
        ans[i][j] = ans[i-1][j-1] +1
      }
      else{
        ans[i][j] = Math.max(ans[i-1][j], ans[i][j-1])
      }
    }
  }


  console.log(ans)
}

console.log(llcs("abcbdab","bdcaba"))
