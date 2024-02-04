// ? https://oj.masaischool.com/contest/5393/problem/06

let n = 4;

let x = 1;

for (let i = 0; i < n; i++) {
  let ans = "";
  for (let j = 0; j < n; j++) {
    ans += x + " ";
    x++;
  }
  console.log(ans);
}
