// 윤년 1월 1일이 금요일이라면, a월 b일은 무슨 요일인가?

function solution(a, b) {
  const yoil = ["THU", "FRI","SAT","SUN","MON","TUE","WED","THU"] // 1월 31일은 일요일, 2/1일은 월요일
  const days = [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ] // 1~12월

  let sum =0;
  for(let i=1; i<a; i++){
      sum += days[i]
  }
  sum += b
  sum = sum%7


  return yoil[sum]       
}