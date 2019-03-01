function solution(blength, weight, trucks) {
  const q = new Array(blength).fill(0); // 다리 표현  [0, 0]
  let sec = 0;
  while (q.length !== 0) {
    // console.log(q)
    sec++;
    q.shift();

    if (trucks.length !== 0) {
      if (Math.max(...q) + trucks[0] <= weight) {
        q.push(trucks.shift());
      } else {
        q.push(0);
      }
    }
  }
  return sec;
}

console.log(
  solution(2, 10, [7, 4, 5, 6]), // 8
  solution(100, 100, [10]), // 101
  solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) // 110
);
