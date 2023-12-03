function primeNumber(number) {
    let n = 0;
    for (let i = 2; i < number / 2; i++) {
      if (number % i == 0) {
        n++;
      }
    }
    if (n == 0 && number !== 1) {
      return "this is a prime number";
    } else {
      return "this is not a prime";
    }
  
  }
  console.log(primeNumber(19));
  