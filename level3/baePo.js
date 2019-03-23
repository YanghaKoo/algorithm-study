function solution(prog, spd) {
  var answer = [];
  var buff = [];

  for (let i in prog) {
    let rest = 100 - prog[i];
    let restDays = Math.ceil(rest / spd[i]);
    buff.push(restDays);
  }

  while (buff[0]) {
    console.log("------------------");
    console.log(buff);

    let a = buff.findIndex(item => {
      return item > buff[0];
    });

    if (a === -1) {
      answer.push(buff.length);
      break;
    } else {
      let day = buff.slice(0, a);
      let left = buff.slice(a, buff.length);
      answer.push(day.length);
      buff = left;
    }
  }

  return answer;
}

console.log(
  "답 : " + solution([20, 30, 22, 45, 90, 12, 76], [15, 38, 24, 56, 12, 11, 13])
); // return [2,1]


// 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
// 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요