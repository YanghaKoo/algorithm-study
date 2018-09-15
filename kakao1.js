// 2018-2 kakao coding test - 1

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan"
];

function solution(record) {
  var answer = [];
  var ref = [];
  var table = {};

  for (let i in record) {
    let split = record[i].split(" "); // 	[ 'Enter', 'uid1234', 'Muzi' ]
    ref.push(split);
  }
  console.log(ref); // ref 만들기 끝

  // 테이블 설정
  for (let i in ref) {
    if (ref[i][0] !== "Leave") {
      table[`${ref[i][1]}`] =  ref[i][2];
    }
  }
  console.log(table);

  for (let i in ref) {
    // 먼저 chagne를 조사하고 테이블 설정을 해야함
    if (ref[i][1] === "Change") {
      let id = ref[i][1];
      table[`${id}`] = ref[i][2];
    }

    if (ref[i][0] === "Enter") {
      let buf = [];

      let id = ref[i][1];
      id = table[`${id}`];

      buf[0] = `${id}님이`;
      buf[1] = "들어왔습니다.";
      answer.push(buf);
    } else if (ref[i][0] === "Leave") {
      let buf = [];

      let id = ref[i][1];
      id = table[`${id}`];

      buf[0] = `${id}님이`;
      buf[1] = "나갔습니다.";
      answer.push(buf);
    }
  }
  answer = answer.map(item => {
    return item.join(" ");
  });

  return answer;
}

console.log(solution(record));
