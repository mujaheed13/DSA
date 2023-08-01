function checkPrime(n) {
  for (let i = 2; i <= Math.sqrt(n / 2); i++) {
    if (n % i == 0) {
      return "No";
    }
  }
  return "Yes";
}

console.log(checkPrime(10));
