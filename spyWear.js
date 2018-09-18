// 스파이가 입을수 있는 옷의 경우의수는
// 가진 옷의 종류의 수 + 1 을 곱한 뒤 다벗는 경우 한가지만 빼면 됨
// 예를들어 모자 2, 상의3 , 하의 4면
// 이 문제의 조건을 맞추려면 (2+1)*(3+1)*(4+1) - 1 한 59가 답임


function solution(clothes) {
    const ans = []
    
    for(let i in clothes){
      ans.push(clothes[i][1])
    }
  

    // 객체로 정리
    var obj = {} 
    for(var i in ans){
      if(!obj[ans[i]]){
        obj[ans[i]] = 1;
      }else{
        obj[ans[i]]++
      }     
    }

    let result = 1;
    for(var i in obj){
      result *= (obj[i]+1)
    }
    result -= 1
    return result


  
    // let result =1
    // for(i in obj){
    //   result *= obj[i]
    // }
    // var a = Object.keys(obj).length
    // if(a===1){
    //   return result
    // }else{
    //   return result + clothes.length
    // }

}


console.log(solution([
                      ["yellow_hat", "headgear"],
                      ["blue_sunglasses", "eyewear"],
                      ["green_turban", "headgear"],
                      ["crow_mask", "face"], 
                      ["blue_sunglasses", "face"], 
                      ["smoky_makeup", "face"]
                    ]	
                    ))

// 스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.
// 예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

// 종류	이름
// 얼굴	동그란 안경, 검정 선글라스
// 상의	파란색 티셔츠
// 하의	청바지
// 겉옷	긴 코트
// 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.