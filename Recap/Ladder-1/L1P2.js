// ? https://oj.masaischool.com/contest/402/problem/10

function identifyPrime(num) {
  let rem = 0;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) rem++;
  }

  console.log(rem == 0 ? "Yes" : "No");
}

identifyPrime(13); // ! "Yes"

// * For more optmized solution checkout Problems/02-Check-for-Prime/code.js or code.py
