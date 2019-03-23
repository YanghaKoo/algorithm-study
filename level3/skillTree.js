function solution(order, trees) {
  function isArraySorted(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= arr[i + 1]) return false;
    }
    return true;
  }
  let answer = 0;

  trees.forEach(tree => {
    let arr = [];
    for (let i = 0; i < order.length; i++) {
      let temp = tree.indexOf(order[i]);
      arr.push(temp);
    }
    // arr의 -1이 나온 이후에 그 뒤에 뭐가 나오면 안되는거임
    let temp2 = arr.indexOf(-1);

    // 모두 들어있고 순서대로 되어있다면 정답에 +1
    if (temp2 === -1) {
      if (isArraySorted(arr)) answer++;
    } else {
      // 모두 안들어있더라도 앞에걸 만족하고 뒤에가 모두 -1이면 정답 +1
      let shouldBeSorted = arr.slice(0, temp2);
      let shouldBeAllMinusOne = arr.slice(temp2, arr.length);

      if (isArraySorted(shouldBeSorted)) {
        if (shouldBeAllMinusOne.find(e => e > -1) === undefined) answer++;
      }
    }
  });

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); // 2
