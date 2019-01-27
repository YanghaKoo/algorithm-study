// 176p
// 수열의 빠른 합과 행렬의 빠른 제곱

function fastSum(n){
  if (n==1) return 1;
  if(n % 2 === 1) return fastSum(n-1) + n

  return 2*fastSum(n/2) + (n/2)*(n/2)
}

