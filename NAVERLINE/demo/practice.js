const arr = [1,3,2,4,3,1,6,5,6,2,1]
const newArr = [...new Set(arr)].sort()
// console.log(newArr)

const str = 'abcdacbe'
const newStr = [...new Set(str)].join('')
// console.log(newStr)




let arr2 = [1,1,4,1,1,6]
arr2 = arr2.filter(item => arr2.indexOf(item) === arr2.lastIndexOf(item))
// console.log(arr2)


// slice : 원본배열 훼손안함, splice : 원본배열 훼손 (substr과 비슷)
const arr3 = [1,2,3,4,5]
const newArr3 = [...arr3.slice(0,2), ...arr3.slice(3)]
console.log(arr3, newArr3)


arr3.splice(2,1) // 2번인덱스부터1개를 제거(원본 훼손)
console.log(arr3)


