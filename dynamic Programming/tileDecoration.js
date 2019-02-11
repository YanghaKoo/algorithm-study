// 프로그래머스 동적프로그래밍 2번문제


// 0      1 2 3 4 5 6 7    // 인덱스
// 0      1 1 2 3 5 8 13   // 값


let fibo = new Array(80).fill(-1);
fibo[1] = 1;
fibo[2] = 1;

function fiboFunc(N) {
  if (N === 1 || N === 2) return 1;
  else {
    if (fibo[N] !== -1) return fibo[N];
    else {
      fibo[N] = fiboFunc(N - 1) + fiboFunc(N - 2);
      return fibo[N];
    }
  }
}

function solution(N){
  const nth = fiboFunc(N) 
  return 2*(fibo[N]+fibo[N-1]) + 2*fibo[N]
}


console.log(solution(6))
