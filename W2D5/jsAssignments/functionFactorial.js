function fact(n) {
    let res = 1;
    while (n >= 1) {
      res *= n;
      n--;
    }
    return res;
  }
  console.log(fact(5));
  