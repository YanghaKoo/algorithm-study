// 카카오 3번 후보키 문제   
  
function solution(relation) {
  function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }
  let answer = 0;

  const rLength = relation.length; // 6
  const cLength = relation[0].length; // 4

  const newArr = new Array(cLength).fill(0).map(v => []);

  for (let i = 0; i < rLength; i++) {
    for (let j = 0; j < cLength; j++) {
      newArr[j].push(relation[i][j]);
    }
  }

  
  // 하나의 경우
  newArr.forEach(arr => {
    if (!hasDuplicates(arr)) {
      answer++;
    }
  });

  return answer;
}

// 최대길이 20 row
console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"]
  ])
); // 2
