// 주어진 문자열에서 p와 y의 개수가 같으면 true 아니면 false


function solution(s) {
  const length = s.length;
  let pc = 0;
  let yc = 0;

  for (let i = 0; i <= length; i++) {
    if (s[i] === "p" || s[i] === "P") pc++;
    else if (s[i] === "Y" || s[i] === "y") yc++;
  }

  if (pc === 0 && yc === 0) return false;
  else if (pc === yc) return true;
  else return false;

  return answer;
}
