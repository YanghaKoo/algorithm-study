const data = [
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [1, 0, 0, 0, 0]
];

function solution(data) {
  const visited = new Array(data.length).fill(0);
  let numberOfComponents = 0

  // 재귀적으로 해결
  function dfs(here) {
    console.log("visited : ", here);
    visited[here] = 1;

    for (let i = 0; i < data.length; i++) 
      if (visited[i] === 0 && data[here][i] === 1) dfs(i);            
  }

  // 네트워크 문제처럼 그래프가 모두 연결된게 아니라면 이렇게 해야지
  function dfsAll() {
    for (let i = 0; i < visited.length; i++) {
      if (visited[i] === 0) {
        dfs(i);
        numberOfComponents++
      }      
    }
    return numberOfComponents
  }
  return dfsAll()
}

console.log(solution(data));
