function solution(record) {
  let answer = [];
  const dick = {};

  record.forEach(item => {
    const [action, id, nick] = item.split(" ");
    
    if (action === "Enter") {
      dick[id] = { nick };
      answer.push(`${id}님이 들어왔습니다.`);
    } else if (action === "Leave") {
      answer.push(`${id}님이 나갔습니다.`);
    } else {
      dick[id] = {nick}
    }
  });

  answer = answer.map(item => {
    const id = item.slice(0, item.indexOf("님"));
    return item.replace(id, dick[id].nick);
  });
  return answer;
}



console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
  ])
);
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

// Enter
// Enter
// Leave
// Enter
// Chnange
