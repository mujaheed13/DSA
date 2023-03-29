// https://oj.masaischool.com/contest/5568/problem/101

function fun(str, n) {
  let vowel = "aeiou";
  let consonent = "bcdfghjklmnpqrstwxyz";

  let v = 0;
  let c = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (str[i] === vowel[j]) {
        v++;
      }
    }
    for (let j = 0; j < consonent.length; j++) {
      if (str[i] === consonent[j]) {
        c++;
      }
    }
  }

  console.log(v, c);
}

let str = "mujaheed";
let n = str.length;
fun(str, n);
