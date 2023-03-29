// ==> https://oj.masaischool.com/contest/5369/problem/401

let arr = [1, 2, 3, 4, 5, 6];
let k = 3;
let n = arr.length;

let ans = "";

for (let i = k; i >= 0; i--) {
  ans += arr[i] + " ";
}

for (let i = k + 1; i < n; i++) {
  ans += arr[i] + " ";
}

console.log(ans);
