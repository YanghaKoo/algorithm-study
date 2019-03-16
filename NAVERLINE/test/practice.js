function getLevel(num) {
  let i = 0;
  let before = 0;
  let after = 3

  if(num === 0 ) return 0
  
  while (true) {
    i++
    if ((before < num) && (num <= after)) {
      return i;
    }else{
      before+= Math.pow(3,i)
      after += Math.pow(3,i+1)
    }
  }
}

console.log(getLevel(12));
