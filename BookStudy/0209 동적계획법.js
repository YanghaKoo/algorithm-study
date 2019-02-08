// fibonachi 메모리제이션 방식

// const f = new Array(100).fill(-1)
function fib(n){
  if(n===1 || n===2 ) return 1
  else if(f[n] > -1) return f[n]
  else{
    f[n] = fib(n-2) + fib(n-1);
    return f[n]
  }
}

// fibonachi bottom up 방식
// 그냥 앞에서부터 쭉 다 더하는 것
// 이걸 다이나믹 프로그래밍이라고 한다!!!
// 이렇게 botton up 방식으로 계산하는 방식!!
// 순환식을 바텀업 방식으로 이용하는 과정!
const f = []
function fib2(n){
  f[0] = f[1] = f[2] = 1;
  for(let i =3; i<=n; i++) f[i] = f[i-2] + f[i-1]
  return f[n]
}

// ---------------------------------------------------------------------------------

// 이항계수 문제
// nCk n개중에서 k개를 선택하는 경우의 수
function binomial(n, k){
  if(n === k || k === 0) return 1
  else return binomial(n-1,k) + binomial(n-1,k-1)
}
// 이렇게 재귀로 풀면 많은 계산이 중복됨 나쁜방법


// 이걸 메모리제이션으로 풀면
// 2차원 배열로 풀어야지
// 2차원 배열에 중간 계산 결과를 저장을 해놓는거지
const binom = []
for(let i =0; i<10; i++) binom.push(new Array(10).fill(-1))

// 메모리얼 방식(캐싱)
function binomial2(n, k){
  if(n===k || k===0) return 1;
  else if(binom[n][k] > -1) return binom[n][k]
  else {
    binom[n][k] = binomial2(n-1,k) + binomial2(n-1,k-1);
    return binom[n][k]
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
function binomial3(n,k){
  for(let i =0; i<=n; i++){
    for(let j=0; j<=k && j<=i; j++){      // j<=i 이건 대각선 윗부분을 날리는 것 굳이 필요가 없음
      if( i===j || j===0) binom[i][j] = 1
      else binom[i][j] = binom[i-1][j] + binom[i-1][j-1]
    }
  }
}
