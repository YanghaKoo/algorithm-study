function solution(n, computers) {
  let answer = 0;
  
  // 방문한 노드를 표시할 배열을 -1로 초기화 해줘야 함
  let visited = new Array(n).fill(-1);

  // queue를 만들어서 하지 넓이우선탐색은
  const queue = [];
  
  // 아직 방문이 안된 노드가 있을 경우 계속 첫번째 while문을 돌아야함
  while ( visited.indexOf(-1) >= 0) {           
    // 아직 방문 안된 노드에서 출발, 넓이 우선 탐색을시작 
    const num = visited.indexOf(-1)    

    // queue에 넣고, 방문했다고 표시해줌
    queue.push(num);
    visited[num] = 1;
   
    // 큐가 빌때 까지 두번째 while문을 돈다
    while (queue.length !== 0) {
      // 앞에서 하나 뽑고
      const u = queue.shift();
      // 뽑은애와의 인접한 노드들에 대해서 스택에 넣어주고 왔다감을 표시함
      computers[u].forEach((r, i) => {
        if (i === u) return
        else if (r === 1 && visited[i] === -1) {
          visited[i] = 1;
          queue.push(i);
        }
      });
    }
    
    // 두번재 while문이 끝나면 하나의 connected graph가 만들어 졌단 것이므로 문제의 내용인 네트워크가 생긴것 ==> 답에 +1 해주고 다시 첫번째 while문으로 돌아가
    answer++  
  }

  return answer;
}




console.log("");
console.log(
  solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]) // 2
);
console.log("");

console.log(
  solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]) // 2
)
