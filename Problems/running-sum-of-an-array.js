// ? https://oj.masaischool.com/contest/5311/problem/06

let arr = [1, 2, 3, 4, 5];
let n = arr.length;

let sum = 0;

let ans = [];

for (let i = 0; i < n; i++) {
  let x = sum + arr[i];
  ans.push(x);
  sum = x;
}

console.log(ans.join(" "));
