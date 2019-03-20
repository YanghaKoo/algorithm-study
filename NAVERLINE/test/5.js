// 라인 코딩테스트 5번
 
process.stdin.setEncoding("utf8");
process.stdin.on("data", data => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);


  // BFS로 풀것 인데, 특정 index에서 트리의 depth를 구해주는 함수
  function getLevel(num) {
    let i = 0;
    let before = 0;
    let after = 3
  
    if(num === 0 ) return 0
    
    while (true) {
      i++
      if ((before < num) && (num <= after)) {
        return i;
      }else{
        before+= Math.pow(3,i)
        after += Math.pow(3,i+1)
      }
    }
  }

  // 1~N까지의 합
  var sumN = function(n) {
    if (Number.isNaN(n) || n < 1) return 0;
    return ((n + 1) * n) / 2;
  };

  // num초 후 코니의 위치
  function cony(a, num) {
    return a + sumN(num);
  }

  // 변수들
  let browns = [];
  let i = 1;
  let depth = 0;

  browns[0] = b;
  
  while (true) {
    let temp = parseInt((i - 1) / 3); // 몫, 부모노드를 가르킴
    if (i % 3 === 1) {
      browns[i] = browns[temp] + 1;
    } else if (i % 3 === 2) {
      browns[i] = browns[temp] - 1;
    } else {
      browns[i] = browns[temp] * 2;
    }

    depth = getLevel(i);

    if (browns[i] === cony(a, depth)) {
      break;
    } else {
      if (cony(a, depth) > 200000) {
        depth = -1;
        break;
      } // 조건을 벗어나면  -1로 설정하고 break
      i++;
    }
  }


  
  console.log(depth);
});
