function bubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

// 내가한거
function insertionSort(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    const tmp = arr[i];
    for (let j = 1; j <= i; j++) {
      console.log("temp", tmp);
      console.log("arr", arr);
      console.log("");

      if (arr[i - j] > tmp) {
        arr[i - j + 1] = arr[i - j];
      } else {
        arr[i - j + 1] = tmp;
        break;
      }
    }
  }
  return arr;
}

//console.log(insertionSort([1,5,3,2]));

// 배열 arr에서 p~q가 정렬되어있고 q+1에서 r이 정렬되어 있을 때 하나의 배열로 합쳐서 정렬해주는 함수
// 합병 정렬에선 반드시 새로운 리스트가 필요함, 원래 배열과 크기가 같은 추가배열(tmp)

function merge(arr, p, q, r) {
  let i = p,
    j = q + 1,
    k = p;
  let tmp = new Array(arr.length);

  // 각각의 나눠진 배열이 둘다 끝에 도달하기 전까지
  while (i <= q && j <= r) {
    if (arr[i] <= arr[j]) tmp[k++] = data[i++];
    else tmp[k++] = data[j++];
  }

  // 위의 while문을 빠져나왔다는 것은 i가 q를 넘어갔거나, j가 r을 넘어갔다는 뜻이므로
  // 이제 남은 것들을 그대로 내려주면 됨

  // 앞쪽 리스트에 남아있는 데이터가 있다면
  while (i <= q) tmp[k++] = arr[i++];
  // 뒤쪽 리스트에 남아있느 ㄴ데이터가 있다면, 반드시 두 while문 중 하나만 실행되긴 하겠지
  while (j <= r) tmp[k++] = arr[j++];

  // 여기까지 오면 새로운 배열 tmp에 정렬된 상태로 되어있겠지 이제 마지막으로 tmp를 원래배열로 옮겨주면 됨
  // 이 부분이 머지소트의 하나의 흠이지
  for(let i=p; i<=r; i++) arr[i] === tmp[i]
}







// quick sort

// 피벗을 정하고 기준으로 파티션을 나눠줌
function partition(arr,p,r){
  const pivot = arr[r]
  let i = p -1
  for(let j=p; j<r; j++){
    if(arr[j] <= pivot) {
      i++      

      // 현재위치 (arr[j])가 pivot 보다 작을떄 swap 시켜줘야지
      let tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp      
    }     
  }
  
  // 피벗과 i+1 바꿔주기
  let tmp = arr[i+1]
  arr[i+1] = pivot
  arr[r] = tmp
  return i+1

}

function quickSort(arr, p, r){
  if(p<r){
    // 피벗을 partition 함수로 구함   
    const pivot = partition(arr,p,r)
    quickSort(arr,p,pivot-1)
    quickSort(arr,pivot+1,r)    
  }
  return arr
}

// console.log(quickSort([1,5,2,3,5,7,8], 0, 6))

  // 히피파이는 루트(i)를 제외한 자식들이 heap을 만족한다고 가정했을때 진행

  // function maxHeapify(arr, i){
  //   if 노드 arr[i]의 자식이 존재하지 않는다면 return
  //   k = 자식이 있다면 둘 중 더 큰걸 k라고 지정
  //   if arr[i] >= arr[k] return 

  //   exchange arr[i] and arr[k]
  //   maxHeapify(arr, k)
  // }



function heapSort(){


}

// console.log(heapSort([1,100,123,1,233,2,323,23,123,65])     )

// 최대 우선순위 큐
