// 148p
// 반복문 여러개 사용해서 n까지의 수 중 4개를 뽑는 방법  (nC4를 모두 나열하기)
function soulution(n) {
  let count = 0;
  for (var i = 0; i < n; i++)
    for (var j = i + 1; j < n; j++)
      for (var k = j + 1; k < n; k++)
        for (var l = k + 1; l < n; l++) {
          console.log(i, j, k, l);
          count++;
        }
  console.log(count);
}

// 재귀로의 해결법
// n : 전체 원소의 수                   // nC4의 n
// picked : 지금까지 고른 원소들의 번호
// toPick : 더 고를 원소의 수           // nC4의 4(최초)
function recurSoultion(n, picked, toPick) {
  // 더이상 뽑을 애가 없다면 --> 출력
  if (toPick === 0) {
    for (var i = 0; i < picked.length; i++) console.log(picked[i]);
    console.log("");
    return;
  }

  // 최초에 골라진게 없으니까(picked.length === 0) smallest는 0이되지, picked가 있으면 picked의 다음값을 고르는거지
  var smallest = picked.length === 0 ? 0 : picked[picked.length - 1] + 1;

  // 최초 : 0에서 5까지 반복문을 도는데
  for (var next = smallest; next < n; next++) {
    picked.push(next);
    recurSoultion(n, picked, toPick - 1);
    picked.pop();
  }
}

const arr = [];
// recurSoultion(5, [], 4);

// --------------------------------------------------------------------------------------------------------------
// 150p 보글 게임

// 한 지점을 기준으로 x,y의 움직임을 기록해 놓은 것
// direction이 1이면 x로 -1, y로 0 움직이는거지
/*
  dx,dy는 다음 숫자의 index를 기준으로 움직이는 거임
  3 9 6
  2 x 5
  1 8 4
*/

// 보드 세팅
const BOARD = [
  ["U", "R", "L", "P", "M"],
  ["X", "P", "R", "E", "T"],
  ["G", "I", "A", "E", "T"],
  ["X", "T", "N", "Z", "Y"],
  ["H", "O", "Q", "R", "S"]
];

// 5*5 배열판에 범위가 들어가는지 확인하는 함수
function inRange(y, x) {
  // 조건 0<=x <5 이런식으로 하지 말고 나눠서 해야함
  if (0 <= y && y < 5 && 0 <= x && x < 5) return true;
  else return false;
}

// 이렇게 8방향으로 해논게 핵심 아이디어네
const dx = [-1, -1, -1, 1, 1, 1, 0, 0];
const dy = [-1, 0, 1, -1, 0, 1, -1, 1];

// 매개변수 : y좌표, x좌표, 단어
function hasword(y, x, word) {
  // 기저사례들, 기저사례들의 순서도 중요함, 일치검사를 먼저하고 길이검사를 해서 판단해야함
  if (!inRange(y, x)) return false;
  if (BOARD[y][x] !== word[0]) return false;
  if (word.length === 1) return true;

  for (let direction = 0; direction < 8; direction++) {
    let nextY = y + dy[direction];
    let nextX = x + dx[direction];

    // substr으로 맨 앞에 문자열 제거 ( word --> ord )
    if (hasword(nextY, nextX, word.substr(1))) {
      return true;
    }
  }
  return false;
}
//console.log(hasword(2, 2, "AETPP"));
// 이 방법은 시간 복잡도가 O(8^N) 임.. 단어가 짧을 때만 가능
// 이후에 동적 계획법으로 하면 단어의 길이가 길 때도 가능하다.

// ----------------------------------------------------------------------------------


function func(n){
  if(n<=0) return 0;  
  else return n+func(n-1)
}
