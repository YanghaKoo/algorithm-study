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
recurSoultion(5, [], 4);

// --------------------------------------------------------------------------------------------------------------
// 150p 보글 게임

const dx = [-1, -1, -1, 1, 1, 1, 0, 0];
const dy = [-1, 0, 1, -1, 0, 1, -1, 1];

// y좌표, x좌표, 단어
function hasword(y, x , word){
  if(!inRange(y,x)) return false;
  if(board[y][x] !== word[0]) return false

  if(word.size() === 1) return true




}
