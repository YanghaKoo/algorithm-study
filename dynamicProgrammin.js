var p = [0,1,5,8,9,10,17,17,20,24,30]

function cutRod(p, n){
  var r = [0]   // 이전에 계산한 값들을 저장하는 부분
  
  for(var j =1; j<=n; j++){   // j는 1부터 4
    var q = -1
    
    for(var i= 1; i<=j; i++){
      q = Math.max(q, p[i] + r[j-i])
    }    
    r.push(q)
  }
  return r.pop()
}

console.log(cutRod(p, 2))
console.log(cutRod(p, 3))
console.log(cutRod(p, 4))
console.log(cutRod(p, 7))













// const price = [0,1,5,8,9,10,17,17,20,24,30]
// //console.log(Math.max(...price))

// function solution(n){
//   if(n===0) return 0
//   if(n===1) return 1
//   if(n===2) return 5
//   if(n===3) return 8

//   const results = []
//   for(var i=1; i<=n; i++){
//     results.push(price[i] + solution(n-i))
//   }
//   return Math.max(...results)
// }

// console.log(solution(10))

