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
// factorial
function func(n) {
  if (n <= 0) return 1;
  else return n * func(n - 1);
}

// 문자열의 길이 계산
function stringlength(string) {
  if (string === "") return 0;
  else return 1 + stringlength(string.substr(1));
}

// 문자열 문자 하나식 찍기
function stringPrint(string) {
  if (string === "") return 0;
  else {
    console.log(string[0]);
    stringPrint(string.substr(1));
  }
}

// 문자열 뒤집어서 출력 ** 다시보기~~~
function reversePrint(string) {
  if (string.length === 0) return;
  else {
    reversePrint(string.substr(1));
    console.log(string[0]);
  }
}
// reversePrint("yngha")

// 2진수로 변환해서 출력하는 예
function printBinary(n) {
  if (n < 2) console.log(n);
  else {
    printBinary(n / 2);
    console.log(n % 2);
  }
}

// 배열의 합 구하기
function sumArray(arr) {
  if (arr.length === 0) return 0;
  else {
    return arr[arr.length - 1] + sumArray(arr.slice(0, arr.length - 1));
  }
}
// console.log(sumArray([1,2,3]))

// 명시적 변수로 만들기 예제
function search(arr, begin, end, target) {
  if (begin > end) return -1;
  else if (target === arr[begin]) return begin;
  else return search(arr, begin + 1, end, target);
}

function search2(arr, begin, end, target) {
  if (begin > end) return -1;
  else {
    let middle = Math.ceil((begin + end) / 2);
    if (arr[middle] === target) return middle;

    let index = search(arr, begin, middle - 1, target);
    if (index !== -1) return index;
    else search(arr, middle + 1, end, target);
  }
}

// 배열의 데이터들 중 최대값 찾기
function findMax(arr, begin, end) {
  if (begin === end) return arr[begin];
  else {
    return Math.max(arr[begin], findMax(arr, begin + 1, end));
  }
}

// *************************이진검색********************************************
// 이진검색은 배열이 오름차순으로 정려로디어 있다고 가정하고 시작이니깐
function binarySearch(arr, target, begin, end) {
  if (begin > end) return -1;
  else {
    let middle = Math.floor((begin + end) / 2); // 2
    if (arr[middle] === target) return middle;
    else if (arr[middle] > target) {
      return binarySearch(arr, target, begin, middle - 1);
    } else {
      return binarySearch(arr, target, middle + 1, end);
    }
  }
}

// console.log(binarySearch([1,2,3,   4   ,5], 4, 0, 4))

//  미로찾기 문제!!!! MAZE

const maze = [
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 1, 1, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 1, 0, 0, 1, 1],
  [0, 1, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 0, 0]
];

// 시작지점 x,y를 넣음
function mazeEscape(x, y) {
  // 좌표가 벽인 경우
  if (x < 0 || y < 0 || x >= 8 || y >= 8) return false;
  else if (maze[x][y] !== 0) return false;
  // 흰색 벽이 아닌 경우 바로 return false
  else if (x === 7 && y === 7) {
    maze[x][y] = "RIGHT PATH";
    return true;
  } else {
    // 그냥 일반적인 경우
    maze[x][y] = "RIGHT PATH";
    if (
      mazeEscape(x - 1, y) ||
      mazeEscape(x, y + 1) ||
      mazeEscape(x + 1, y) ||
      mazeEscape(x, y - 1)
    )
      return true;
    maze[x][y] = "DEAD END";
    return false;
  }
}
// console.log(mazeEscape(0, 0));

// Counting cells in a blob 문제
// 연결된 이미지 픽셀을 blob이라고 함
const blobs = [
  [1, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 0, 1, 0, 0],
  [1, 1, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 1],
  [0, 1, 1, 0, 0, 1, 1, 1]
];

let xpos = [-1, 0, 1, -1, 1, -1, 0, 1];
let ypos = [1, 1, 1, 0, 0, -1, -1, -1];

// 내 풀이
let count = 0;
function myCountingBlob(x, y) {
  if (x < 0 || y < 0 || x >= 8 || y >= 8) return false;
  else if (blobs[x][y] !== 1) return false;
  else {
    blobs[x][y] = 2; // 일단 본 블럭 체크

    for (let i = 0; i < 8; i++) {
      const nextX = x + xpos[i];
      const nextY = y + ypos[i];
      if (
        nextX >= 0 &&
        nextY >= 0 &&
        nextX < 8 &&
        nextY < 8 &&
        blobs[nextX][nextY] === 1
      )
        myCountingBlob(nextX, nextY);
    }
    count++;
  }
  return count;
}
// console.log(myCountingBlob(5,3))

// 정답 풀이
function answerCountingblob(x, y) {
  if (x < 0 || y < 0 || x >= 8 || y >= 8) return 0;
  else if (blobs[x][y] !== 1) return 0;
  else {
    blobs[x][y] = 2;
    let ans = 0;
    for (let i = 0; i < 8; i++) {
      ans += answerCountingblob(x + xpos[i], y + ypos[i]);
    }
    return 1 + ans;
  }
}

// console.log(answerCountingblob(5,3))








// N queens problem
const N = 4; // 4*4  체스 배열
let cols = new Array(10).fill(0);

function promising(level) {
  for (let i = 0; i < level; i++) {
    if (cols[i] !== 0 && cols[level] !== 0 && cols[i] === cols[level]) {
      // console.log("same row");
      return false;
    } else if (level - i === Math.abs(cols[level] - cols[i])) {
      // console.log("대각선 걸림");
      return false;
    }
  }
  return true;
}

function printCols() {
  for (let i = 1; i <= N; i++) console.log(cols[i]);
  console.log("");
}

function queens(level) {
  // level은 depth의 의미
  printCols()

  if (!promising(level)) {
    // console.log("not promising");
    return false;
  } else if (level === N) return true;

  // 최종 정답도 아니고, 실패도 아닐 때, 재귀 수행  

  for (let i = 1; i <= N; i++) {
    cols[level + 1] = i;
    if (queens(level + 1)) return true;
  }
  return false;
}

console.log(queens(0));






// 멱집합 구하기

