// => https://oj.masaischool.com/contest/5369/problem/402

let arr = [6, 7, 8, 9, 10];
let n = arr.length;
let k = 3;

let str = "";
for (let j = 0; j <= k - 1; j++) {
  str += arr[j] + " ";
}

for (let i = n - 1; i >= k; i--) {
  str += arr[i] + " ";
}

console.log(str);
