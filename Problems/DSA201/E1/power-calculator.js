// https://oj.masaischool.com/contest/5659/problem/5-1
function powerCalculator(N, str) {
  let x = 0;
  let y = 0;

  for (let i = 0; i <= N - 1; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      x++;
    } else {
      y++;
    }
  }

  let ans = 3 * x + 5 * y;

  console.log(ans);
}

let str = "mujaheed";
let n = str.length;
powerCalculator(n, str);