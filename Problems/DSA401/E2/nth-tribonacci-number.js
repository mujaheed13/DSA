// ==> https://oj.masaischool.com/contest/7519/problem/02

function fun(n) {
  let arr = [0, 1, 1];

  if (n <= 2) return arr[n];

  for (let i = 3; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  return arr[n];
}

let n = 5;
console.log(fun(n));
