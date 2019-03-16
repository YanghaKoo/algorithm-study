process.stdin.setEncoding("utf8");
process.stdin.on("data", data => {
  const n = data.split(" ");
  var a = Number(n[0]);
  var answer = 0;

  function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  function factorsOf(n) {
    var factors = [];
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        factors.push(i);
        factors.push(n / i);
      }
    }
    return factors;
  }

  
  if(a === 1){
      answer = 0
  }
  else if (isPrime(a)) {
    answer = a - 1;
  } else {
    var pairs = factorsOf(a);

    var center = pairs.length / 2;

    if (center <= 1) {
      answer = Math.abs(pairs[0] - pairs[1]);
    } else {
      answer = Math.abs(pairs[pairs.length - 2] - pairs[pairs.length - 1]);
    }
  }
      
  console.log(answer);  
});
