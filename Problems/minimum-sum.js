// ? https://oj.masaischool.com/contest/6949/problem/17

// ! Sliding Window

function minimumSum(n, k, arr) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  let ans = sum;

  for (let i = k; i < n; i++) {
    sum -= arr[i - k];
    sum += arr[i];
    ans = Math.min(sum, ans);
  }

  console.log(ans);
}

let arr = [9, 9, -5, 9, 5];
let n = arr.length;
let k = 3;

minimumSum(n, k, arr);
