function solution(arr, location) {
  function max(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++)
      max = max > arr[i].value ? max : arr[i].value;

    return max;
  }

  const array = [];
  const arr2 = [];
  arr.forEach(r => {
    arr2.push({ value: r });
  });
  arr2[location].token = "ans";

  while (arr2.length !== 0) {
    if (max(arr2) === arr2[0].value) array.push(arr2.shift());
    else {
      const a = arr2.shift();
      arr2.push(a);
      // console.log(arr2);
    }
  }
  // console.log(array);
  let answer = -1;
  array.forEach((r,i)=>{
    if(r.token === 'ans') answer = i+1
  })
  return answer
}

console.log(solution([1,1,9,1,1,1], 0));
